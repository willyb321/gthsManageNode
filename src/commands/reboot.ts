/**
 * @module Commands
 */

 /** ignore this comment */
import {connect} from './connect';

/**
 * Tells the noticeboard to reboot.
 */
export function reboot(): Promise<null | Error> {
	return connect(['sudo reboot']);
}
