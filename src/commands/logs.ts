import {connect} from "./connect";

/**
 * Get logs of docker container
 * @returns Promise<any>
 */
export function getLogs() {
	return connect(['docker logs simple-todos']);
}
