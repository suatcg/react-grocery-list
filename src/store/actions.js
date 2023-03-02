export const GET_CATEGORY = 'GET_CATEGORY';

export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAIL = 'GET_CATEGORY_FAIL';

export const getCategoryFetch = (category) => ({
	type: GET_CATEGORY,
	payload: category,
});
