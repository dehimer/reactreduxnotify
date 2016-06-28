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

export function resetnotify () {
	console.log('resetnotify');
	return {
		type: NOTIFY,
		payload: {
			text: '',
			warning: false
		}
	}
}