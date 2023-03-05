import {
	GET_CATEGORY_SUCCESS,
	GET_CATEGORY_FAIL,
	LOAD_CATEGORY,
} from '../actions';

export const getCategoryReducer = (
	state = {
		category: [],
		loading: false,
		err: '',
	},
	action
) => {
	switch (action.type) {
		case LOAD_CATEGORY:
			return {
				...state,
				loading: true,
			};
		case GET_CATEGORY_SUCCESS:
			return {
				...state,
				category: action.category,
				loading: false,
			};
		case GET_CATEGORY_FAIL:
			return {
				...state,
				err: action.message,
				loading: false,
			};
		default:
			return state;
	}
};
