import { NOFIFY } from 'actions';

export default function rootReducer (state, action) {
	switch (action.type)
	{
		case NOFIFY:
			return {...state}
		default:
			return state;
	}
}