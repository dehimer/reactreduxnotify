import { NOTIFY } from 'actions';

export default function note (state={}, action) {
	switch (action.type)
	{
		case NOTIFY:
			return {...state, note: action.payload};
		default:
			return state;
	}
}