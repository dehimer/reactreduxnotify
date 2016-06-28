import { NOTIFY, SENT_EMAIL } from 'actions';

export default function note (state={message:'', warning:false}, action) {
	console.log(action);
	switch (action.type)
	{
		case NOTIFY:
			return {...state, ...action.payload};
		case SENT_EMAIL:
			return {...state, ...action.payload};
		default:
			return state;
	}
}