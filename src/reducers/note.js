import { NOTIFY } from 'actions';

export default function note (state={message:'', warning:false}, action) {
	switch (action.type)
	{
		case NOTIFY:
			return {...state, ...action.payload};
		default:
			return state;
	}
}