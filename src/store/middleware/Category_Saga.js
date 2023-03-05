import {
	LOAD_CATEGORY,
	GET_CATEGORY_FAIL,
	GET_CATEGORY_SUCCESS,
} from '../actions';

import { call, put, takeLatest } from 'redux-saga/effects';

const categoryFetch = async (category) => {
	const res = await fetch(`http://localhost:3500/categories:`);

	if (!res.ok) {
		throw new Error('Something went wrong');
	}

	const data = await res.json();

	console.log(data[`${category}`]);

	return data[`${category}`];
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
	yield takeLatest(LOAD_CATEGORY, getCategory);
}
