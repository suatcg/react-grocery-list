import { GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL } from '../actions';

export const getCategoryReducer = (state = { category: 'Bakery' }, action) => {
	switch (action.type) {
		case GET_CATEGORY_SUCCESS:
			return {
				...state,
				category: action.category,
			};
		case GET_CATEGORY_FAIL:
			return {
				message: action.message,
			};
		default:
			return state;
	}
};
