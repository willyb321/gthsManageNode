/**
 * @module Commands
 */

 /** ignore this comment */
import {connect} from './connect';

/**
 * Check if noticeboard is deployed
 * @returns {Promise<boolean>}
 */
export function deployed() {
	return connect(['/home/gths/isdeployed.sh'])
}
