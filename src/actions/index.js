import {ADD_COMMENT} from './const';

export const addComment = list => {
    return {
        type: ADD_COMMENT,
        payload: list,
    };
};
