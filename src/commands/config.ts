import * as inquirer from 'inquirer';
import * as Configstore from 'configstore';
import * as path from 'path';
import * as os from 'os';

const pkg = require('../../package.json');

export const conf = new Configstore(pkg.name);

/**
 * Asks questions and makes a config.
 */
export function createConfig() {
	return new Promise((resolve, reject) => {
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
				default: () => path.join(os.homedir(), ".ssh", "id_rsa")
			},
			{
				type: 'input',
				name: 'phone',
				message: 'What\'s your phone number',
				validate: function (value: any) {
					const pass = value.match(/^([01])?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?)(?:\d+)?)?$/i);
					if (pass) {
						return true;
					}
					return 'Please enter a valid phone number';
				}
			}
		];

		inquirer.prompt(questions).then((answers: ConfigAnswers | Object) => {
			for (const i in answers) {
				if (answers.hasOwnProperty(i)) {
					console.log(`Setting ${i} in config`);
					conf.set(i, answers[i]);
				}
			}
			resolve();
		});
	})
}

interface ConfigAnswers {
	phone: number;
	port: number;
	ip: string;
	sshkey: string;
}

/**
 * Prints the config
 */
export function getConfig() {
	const all = conf.all;
	for (const i in all) {
		if (all.hasOwnProperty(i)) {
			console.log(`${i}: ${all[i]}`);
		}
	}
}
