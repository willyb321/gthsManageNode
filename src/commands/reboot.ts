/**
 * @module Commands
 */

import {connect} from './connect';

/**
 * Tells the noticeboard to reboot.
 */
export function reboot() {
	return connect(['sudo reboot']);
}
