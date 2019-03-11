import {combineReducers} from 'redux';
import {addCommentReducer} from './commentList';
import {signReducer} from './signIn';

const rootReducer = combineReducers ({addCommentReducer, signReducer});

export default rootReducer;
