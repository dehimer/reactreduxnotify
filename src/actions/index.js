export const NOTIFY = 'NOFIFY';

export function notify (index) {
	return {
		type: NOTIFY,
		payload: index
	}
}