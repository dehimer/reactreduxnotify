import { NOTIFY } from 'actions';

export default function note (state={}, action) {
	switch (action.type)
	{
		case NOTIFY:
			console.log(action.payload);
			return {...state, note: action.payload};
		default:
			return state;
	}
}