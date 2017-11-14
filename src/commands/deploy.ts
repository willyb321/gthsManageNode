import {connect} from './connect';
/**
 * Run the noticeboard deploy script
 * @param {boolean} fresh - If true, chrome will be opened (only use if its not already open)
 */
export function deploy(fresh: boolean) {
	if (fresh) {
		return connect(['/home/gths/bootboard.sh'])
	} else {
		return connect(['/home/gths/update.sh'])
	}
}
