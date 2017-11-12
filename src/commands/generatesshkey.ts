import keypair from 'keypair';

/**
 * Generate a SSH key
 * @returns {any}
 */
export function genSSHKey() {
	const pair = keypair();
	console.log(pair);
	return pair;
}

