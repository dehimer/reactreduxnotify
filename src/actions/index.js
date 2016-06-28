export const NOTIFY = 'NOFIFY';

export function notify (text, iswarning) {
	return {
		type: NOTIFY,
		payload: {
			text: text,
			warning: iswarning
		}
	}
}