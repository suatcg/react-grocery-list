import { all, fork } from 'redux-saga/effects';
import mySagaCategory from './Category_Saga';

export function* rootSaga() {
	yield all([fork(mySagaCategory)]);
}
