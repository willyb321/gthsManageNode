/**
 * @module Commands
 */
/** ignore this comment */
import * as keypair from 'keypair';

/**
 * Generate a SSH key
 * @returns {any}
 */
export function genSSHKey(): keypair.KeypairResults {
	const pair = keypair.keypair();
	console.log(pair);
	return pair;
}
