/**
 * Checks if a reboot is required.
 * @returns Promise<boolean> - True if reboot required false if not.
 */
import {connect} from './connect';

export function isRebootRequired() {
	return connect(['/home/gths/isreboot.sh']);
}
