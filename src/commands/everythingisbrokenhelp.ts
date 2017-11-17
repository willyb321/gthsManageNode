/**
 * @module Commands
 */

import {connect} from './connect';
import {conf} from './config';

/**
 * Only for use in cases of extreme emergency thx
 * @param  {String | null} phone The right phone number. No hints.
 * @return {Promise}
 */
export function everythingisbrokenhelp(phone: String | null): Promise<null | Error> {
	if (!phone) {
		phone = conf.get('phone');
	}
	if (phone) {
		return connect([`/home/gths/everythingisbrokenhelp.sh ${phone}`]);
	} else {
		return Promise.reject(new Error('No phone provided.'));
	}
}
