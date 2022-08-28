import { combineReducers } from 'redux';

import userReducer from './UserReducer';
import BatchListReduce from './BatchListReducer';
import BatchReduce from './Test';


const rootReducer = combineReducers({
  userState : userReducer,
  batchListState : BatchListReduce, 
  batchState : BatchReduce

});

export default rootReducer;