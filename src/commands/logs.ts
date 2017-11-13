import {connect} from "./connect";

export function getLogs() {
	return connect(['docker logs simple-todos']);
}
