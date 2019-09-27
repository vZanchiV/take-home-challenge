import { combineReducers } from 'redux';
import  ReducerCards  from './reducer-card';

const rootReducer = combineReducers({
  cards : ReducerCards
});


export default rootReducer;
