import constants from '../constants';
import { BasicApiType } from '../../interfaces/BasicApi';

export const issueTicket = async (email: string, event_id: string, price: number, paid: number, participantNo: number, token: string) => {
	try {
		let res = await fetch(constants.BASE_URL + '/ticket/issue', {
			method: 'POST',
			headers: constants.defaultHeaders,
			body: JSON.stringify({ email, event_id, price, paid, participantNo, token })
		})
		let response: BasicApiType = await res.json();
		return response;
	} catch (err) {
		return { success: false, error: err };
	}
}

export const invalidateTicket = (ticketId: string, token: string) => {
	fetch(constants.BASE_URL + "/ticket/invalidate", {
		method: 'POST',
		headers: constants.defaultHeaders,
		body: JSON.stringify({ token, ticketId })
	})
		.then(res => res.json())
		.then((res: BasicApiType) => {
			if (res.success) {
				// Handle success
				console.log('event edited successfully');
			} else {
				// Handle error
				console.log('error');
			}
		})
		.catch(err => {
			// Handle error
			console.log('error');
		});
}