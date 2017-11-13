import {connect} from './connect';

/**
 * Update packages on the noticeboard.
 */
export function update() {
	return connect(['/home/gths/updateall.sh']);
}
