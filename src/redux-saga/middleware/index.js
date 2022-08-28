import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeBatchList from '../constants/BatchListConstants';
import * as ActionTypeTest from '../constants/Test'



import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import {handleGetBatchList, handleGetOneBatchList, handleEditBatch} from './BatchListMiddle'
import { handleGetBatch } from './TestSaga';

function * watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    //list get
    takeEvery(ActionTypeBatchList.GET_BATCHLIST_REQUEST, handleGetBatchList),
    takeEvery(ActionTypeTest.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatchList.GETONE_BATCHLIST_REQUEST, handleGetOneBatchList),

    //to edit data
    takeEvery(ActionTypeBatchList.EDIT_BATCHLIST_REQUEST, handleEditBatch),

  ])
}

export default watchAll;


