import {
	GET_CATEGORY,
	GET_CATEGORY_FAIL,
	GET_CATEGORY_SUCCESS,
} from '../actions';

import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

const categoryFetch = async (category) => {
	try {
		const res = await axios(` http://localhost:3500/categories:`);

		const data = await res.json();

		return data[`${category}`];
	} catch (err) {
		return Error(err.message);
	}
};

function* getCategory(action) {
	try {
		const category = yield call(categoryFetch, action.payload);
		yield put({ type: GET_CATEGORY_SUCCESS, category });
	} catch (err) {
		yield put({ type: GET_CATEGORY_FAIL, message: err.message });
	}
}

export default function* mySagaCategory() {
	yield takeLatest(GET_CATEGORY, getCategory);
}
