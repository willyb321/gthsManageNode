import * as sequest from 'sequest';
import {conf} from './config';
import {existsSync, readFileSync} from 'fs';
import {join} from 'path';
import {homedir} from 'os';

process.on('uncaughtException', err => {
	console.log(err);
});
let key;
if (existsSync(conf.get('sshkey'))) {
	key = readFileSync(conf.get('sshkey') || join(homedir(), '.ssh', 'id_rsa'));

} else {
	key = readFileSync(join(homedir(), '.ssh', 'id_rsa'));
}

/**
 * Run commands on noticeboard.
 * @param {Array<string>} commands - Array of commands to run.
 * @returns {Promise<any>}
 */
export function connect(commands: Array<string>) {
	return new Promise((resolve, reject) => {
		const newcmds = commands.join('&&');
		if (Object.keys(conf.all).length < 4) {
			reject(new Error('run `gthsmanage configcreate` first'));
		}
		const seq = sequest(`willb@${conf.get('ip')}:${conf.get('port')}`, {
			command: newcmds,
			privateKey: key
		}, (err: Error) => {
			if (err) {
				reject(err);
			}
			resolve();
		});
		seq.pipe(process.stdout);
	});
}
