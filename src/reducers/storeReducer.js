import { CLICK } from '../actions/types';

const initialState = {
	type: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CLICK:
			return {...state, ...action.payload};
		default:
			return state;
	}
}
