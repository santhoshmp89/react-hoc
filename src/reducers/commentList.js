import {ADD_COMMENT} from '../actions/const';

export const addCommentReducer = (state = [], action) => {
    switch (action.type) {
    case ADD_COMMENT:
        return [...state, {...action.payload, id: state.length + 1}];

    default:
        return state;
    }
};
