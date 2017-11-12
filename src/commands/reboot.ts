import { connect } from "./index";

/**
 * Tells the noticeboard to reboot.
 */
export function reboot() {
	return connect(['sudo reboot']);
}
