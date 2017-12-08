/**
 * @module Commands
 */
/** ignore this comment */
import {existsSync, writeFileSync} from "fs";
import {homedir} from "os";
import {join, parse} from "path";
import {mkdirpSync} from "fs-extra";
import * as forge from 'node-forge';

let sshKeyPath = join(homedir(), '.ssh', 'id_rsa');
let sshKeyPathPublic = join(homedir(), '.ssh', 'id_rsa.pub');

/**
 * Put ssh key in the right place.
 * @returns {Promise<any>}
 */
export function genSSHKey() {
	return new Promise(resolve => {
		if (existsSync(sshKeyPath) || existsSync(sshKeyPathPublic)) {
			console.log(`SSH key already found. Exiting`);
			resolve(true);
		} else {
			try {
				console.log(`SSH key not found. Making one.`);
				mkdirpSync(parse(sshKeyPath).dir);
				forge.pki.rsa.generateKeyPair({bits: 2048, workers: -1}, function(err, keypair) {
					if (err) {
						console.log(err);
					} else {
						const privateKey = forge.ssh.privateKeyToOpenSSH(keypair.privateKey);
						const publicKey = forge.ssh.publicKeyToOpenSSH(keypair.publicKey);
						writeFileSync(sshKeyPath, privateKey);
						writeFileSync(sshKeyPathPublic, publicKey);
						console.log(`Done! SSH keys were made in ${sshKeyPath}. Run \`gthsmanage config create\` to add them to the config.\nYou will need to copy the public key to the server. Give Will this:\n ${publicKey}.`);
						resolve(true);
					}

				});
			} catch (err) {
				console.log(err);
			}
		}
	});
}
