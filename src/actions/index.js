import {CLICK} from './types';

export const syncClick = () => {
    return { type: CLICK, payload: { type: 'sync' } };
}

export const asyncClick = () => dispatch => {
    dispatch({type: CLICK, payload: {type: 'unfinished'}});

    setTimeout(() => {
        dispatch({
            type: CLICK,
            payload: { type: 'async' }
        });
    }, 500)
}