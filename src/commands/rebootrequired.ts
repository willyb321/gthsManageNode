/**
 * @module Commands
 */

import {connect} from './connect';

/**
 * Checks if a reboot is required.
 * @returns Promise<boolean> - True if reboot required false if not.
 */
export function isRebootRequired() {
	return connect(['/home/gths/isreboot.sh']);
}
