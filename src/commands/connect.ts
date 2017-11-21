/**
 * @module Commands
 */

 /** ignore this comment */
import * as sequest from 'sequest';
import {conf} from './config';
import {existsSync, readFileSync} from 'fs';
import {join} from 'path';
import {homedir} from 'os';

/**
 * SSH Key
 * @type Buffer
 */
let sshKey: Buffer;

/**
 * Run commands on noticeboard.
 * @param {Array<string>} commands - Array of commands to run.
 * @returns {Promise<any>}
 */
export function connect(commands: Array<string>): Promise<any | Error> {
	return new Promise((resolve, reject) => {
		if (existsSync(conf.get('sshkey'))) {
			try {
				sshKey = readFileSync(conf.get('sshkey') || join(homedir(), '.ssh', 'id_rsa'));
			} catch (err) {
				if (err.code === 'ENOENT') {
					console.log('SSH key not found.')
				} else {
					console.log(`We've had an error, the message is: ${err.message}\nStack (give to Will): ${err.stack}`);
				}
			}

		} else if (existsSync(join(homedir(), '.ssh', 'id_rsa'))) {
			console.log('ayy')
			try {
				sshKey = readFileSync(join(homedir(), '.ssh', 'id_rsa'));
			} catch (err) {
				if (err.code === 'ENOENT') {
					console.log('SSH key not found.')
				} else {
					console.log(`We've had an error, the message is: ${err.message}\nStack (give to Will): ${err.stack}`);
				}
				console.log(`We've had an error, the message is: ${err.message}\nStack (give to Will): ${err.stack}`);
			}
		} else {
			console.log(`Can't Find an SSH key.`);
			reject(new Error(`Can't Find an SSH key.`));
			return;
		}
		const newcmds = commands.join(' && ');
		console.log(`Running the following commands:`);
		console.log(newcmds);
		if (Object.keys(conf.all).length < 4) {
			reject(new Error('run `gthsmanage configcreate` first'));
		}
		const seq = sequest(`${conf.get('user') || 'gths'}@${conf.get('ip')}:${conf.get('port')}`, {
			command: newcmds,
			privateKey: sshKey
		}, (err: Error, stdout: String) => {
			if (err) {
				reject(err);
			} else {
				resolve(stdout);
			}
		});
		// Pipe output to terminal
		seq.pipe(process.stdout);
	});
}
