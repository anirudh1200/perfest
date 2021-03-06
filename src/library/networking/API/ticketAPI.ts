import constants from '../constants';
import { BasicApiType } from '../../interfaces/BasicApi';

interface CollegeType {
	name: string,
	year: string,
	branch: string
}

interface IssueTicketType {
	name: string;
	phone: number;
	email: string;
	event_id: string;
	price: number;
	paid: number;
	participantNo: number;
	college: CollegeType;
	csi_member: boolean;
	token: any;
}

export const issueTicket = async (payload: IssueTicketType) => {
	let response: BasicApiType;
	try {
		let res = await fetch(constants.BASE_URL + '/ticket/issue', {
			method: 'POST',
			headers: constants.defaultHeaders,
			body: JSON.stringify(payload)
		})
		response = await res.json();
		return response;
	} catch (err) {
		response = { success: false, error: err };
		return response;
	}
}

interface InvalidTicketType extends BasicApiType {
	ticketData: TicketDetailsType | null;
}

export const invalidateTicket = async (secretString: string, token: string) => {
	// let response: InvalidTicketType;
	let response: any;
	try {
		let res = await fetch(constants.BASE_URL + '/ticket/invalidate', {
			method: 'POST',
			headers: constants.defaultHeaders,
			body: JSON.stringify({ token, secretString })
		})
		response = await res.json();
		return response;
	} catch (err) {
		response = { success: false, ticketData: null, error: err };
		return response;
	}
}

interface EventDetailsType {
	name: string;
	date: Date;
	venue: string;
}

interface TicketDetailsType {
	_id: string;
	price: number;
	paid: number;
	balance: number;
	participantNo: number;
	valid: Boolean;
	secretString: string;
	dateIssued: Date;
}

export interface GetDetailsFromTicketUrl extends BasicApiType {
	userType: boolean;
	userId: string;
	eventDetails: EventDetailsType;
	ticketDetails: TicketDetailsType;
}

export const getDetailsFromTicketUrl = async (ticketUrl: string) => {
	let response: GetDetailsFromTicketUrl;
	try {
		let res = await fetch(constants.BASE_URL + '/ticket/getDetailsFromTicketUrl', {
			method: 'POST',
			headers: constants.defaultHeaders,
			body: JSON.stringify({ ticketUrl })
		});
		response = await res.json();
		return response;
	} catch (err) {
		response = { success: false, userType: false, userId: '', eventDetails: { name: '', date: new Date(), venue: '' }, ticketDetails: { _id: '', price: 0, paid: 0, balance: 0, participantNo: 0, valid: false, secretString: '', dateIssued: new Date() }, error: err };
		return response;
	}
}

export const deleteTicket = async (ticketId: string, token: string) => {
	let response: BasicApiType;
	try {
		let res = await fetch(constants.BASE_URL + '/ticket/delete', {
			method: 'POST',
			headers: constants.defaultHeaders,
			body: JSON.stringify({ token, ticketId })
		});
		response = await res.json();
		return response;
	} catch (err) {
		response = { success: false, error: err };
		return response;
	}
}