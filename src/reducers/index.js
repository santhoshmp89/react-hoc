import {combineReducers} from 'redux';
import {addCommentReducer} from './commentList';

const rootReducer = combineReducers ({addCommentReducer});

export default rootReducer;
