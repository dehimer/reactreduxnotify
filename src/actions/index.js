export const NOTIFY = 'NOTIFY';
export const SENT_EMAIL = 'SENT_EMAIL';

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
	// console.log('resetnotify');
	return {
		type: NOTIFY,
		payload: {
			text: '',
			warning: false
		}
	}
}

export function sendemailOptimistic(email) {
	return { type: SENT_EMAIL, payload: {text:`Сообщение на ${email} отправлено`, warning:false}};
}

export function sendemail(email, text) {

	return function(dispatch) {

		dispatch(sendemailOptimistic(email));

		/*
			если отправлять на какой то 3rd party домен, то конечно же придётся использовать fetchJsonp:
		
		
		    var result = fetchJsonp('http://www.flickr.com/services/feeds/photos_public.gne?format=json', {
		      jsonpCallback: 'jsoncallback',
		      timeout: 3000
		    })

			но так как это только тестовое задание - оставлю так
		*/
		fetch('/sendemail', {
			method: 'post',
			body: JSON.stringify({
				email, text
			})
		}).then(response => {
			console.log(response);
		}).catch(err => {
			console.log(err);
		});
		
		return null; 
	}
}