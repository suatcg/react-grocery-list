import {
	GET_CATEGORY,
	GET_CATEGORY_FAIL,
	GET_CATEGORY_SUCCESS,
} from '../actions';

const categoryFetch = (payload) => {
	return axios.request(options).then(function (response) {
		return response.data.address.country;
	});
};

function* getGeocode(action) {
	try {
		const category = yield call(categoryFetch, action.payload);
		yield put({ type: GET_CATEGORY_SUCCESS, geoCode });
	} catch (err) {
		yield put({ type: GET_CATEGORY_FAIL, message: err.message });
	}
}

export default function* mySagaGeoCode() {
	yield takeLatest(GET_CATEGORY, getGeocode);
}
