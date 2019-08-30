import { CLICK } from './types';

export const asyncClick = () => async dispatch => {
	setTimeout(() => {
		dispatch({ type: CLICK, payload: { type: 'async' } });
	}, 500);
};

export const syncClick = () => {
	return { type: CLICK, payload: { type: 'sync' } };
};
