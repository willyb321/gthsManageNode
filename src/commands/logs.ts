/**
 * @module Commands
 */

 /** ignore this comment */
import {connect} from './connect';

/**
 * Get logs of docker container
 * @returns Promise<any>
 */
export function getLogs() {
	return connect(['/usr/local/bin/docker logs simple-todos']);
}
