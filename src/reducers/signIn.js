import {SIGNIN} from '../actions/const';

export const signReducer = (state = false, action) => {
    switch (action.type) {
    case SIGNIN:
        return !action.payload;

    default:
        return state;
    }
};
