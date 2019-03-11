import {ADD_COMMENT, SIGNIN} from './const';

export const addComment = list => {
    return {
        type: ADD_COMMENT,
        payload: list,
    };
};

export const signIn = val => {
    return {
        type: SIGNIN,
        payload: val,
    };
};
