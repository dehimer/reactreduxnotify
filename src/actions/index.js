export const NOTIFY = 'NOFIFY';

export function notify (text, type) {
	return {
		type: NOTIFY,
		payload: {
			text: text,
			type: type
		}
	}
}