/**
 * @module Commands
 */

import * as inquirer from 'inquirer';
import * as Configstore from 'configstore';
import * as path from 'path';
import * as os from 'os';

/**
 * The package.json
 */
export const pkg = require('../../package.json');

/**
 * The config store.
 * @type {Configstore}
 */
export const conf: Configstore = new Configstore(pkg.name);

/**
 * Asks questions and makes a config.
 */
export function createConfig(): Promise<void> {
	return new Promise((resolve) => {
		const questions = [
			{
				type: 'input',
				name: 'ip',
				message: 'What is the IP of the noticeboard? (hint: 10.178.x.x)',
			},
			{
				type: 'input',
				name: 'port',
				message: 'What is the SSH port?',
				default: () => 1471
			},
			{
				type: 'input',
				name: 'sshkey',
				message: 'Path to SSH key?',
				default: () => path.join(os.homedir(), ".ssh", "id_rsa").toString()
			},
			{
				type: 'input',
				name: 'phone',
				message: 'What\'s your phone number',
				validate: function (value: any) {
					const pass = value.match(/^([01])?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?)(?:\d+)?)?$/i); // fancy af regex for a phone number
					if (pass) {
						return true; // Valid phone
					}
					return 'Please enter a valid phone number'; // Not valid phone
				}
			}
		];

		inquirer.prompt(questions).then((answers: ConfigAnswers) => {
			for (const i in answers) { // Iterate through the answers
				if (answers.hasOwnProperty(i)) {
					console.log(`Setting ${i} in config`);
					conf.set(i, answers[i]);
				}
			}
			resolve();
		});
	})
}

export interface ConfigAnswers {
	phone: number;
	port: number;
	ip: string;
	sshkey: string;
}

/**
 * Prints the config
 */
export function getConfig() {
	const all: ConfigAnswers | Object = conf.all;
	for (const val in all) {
		if (all.hasOwnProperty(val)) {
			console.log(`${val}: ${all[val]}`);
		}
	}
}
