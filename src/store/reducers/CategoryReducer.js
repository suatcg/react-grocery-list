import {
	GET_CATEGORY_SUCCESS,
	GET_CATEGORY_FAIL,
	LOAD_CATEGORY,
} from '../actions';

export const getCategoryReducer = (
	state = {
		category: [
			{
				id: '1',
				name: 'bread',
				url: 'https://via.placeholder.com/210/00FF00?text=1',
				alt: 'bread',
			},
			{
				id: '2',
				name: 'croissant',
				url: 'https://via.placeholder.com/220/00FF00?text=2',
				alt: 'sdfalksdjflkasjdfk',
			},
			{
				id: '3',
				name: 'birthday-cake',
				url: 'https://via.placeholder.com/230/00FF00?text=3',
				alt: 'sdfalksdjflkasjdfk',
			},
			{
				id: '4',
				name: 'cheesecake',
				url: 'https://via.placeholder.com/240/00FF00?text=4',
				alt: 'sdfalksdjflkasjdfk',
			},
			{
				id: '5',
				name: 'cheesecake',
				url: 'https://via.placeholder.com/240/00FF00?text=4',
				alt: 'sdfalksdjflkasjdfk',
			},
			{
				id: '6',
				name: 'cheesecake',
				url: 'https://via.placeholder.com/240/00FF00?text=4',
				alt: 'sdfalksdjflkasjdfk',
			},
			{
				id: '7',
				name: 'cheesecake',
				url: 'https://via.placeholder.com/240/00FF00?text=4',
				alt: 'sdfalksdjflkasjdfk',
			},
			{
				id: '8',
				name: 'cheesecake',
				url: 'https://via.placeholder.com/240/00FF00?text=4',
				alt: 'sdfalksdjflkasjdfk',
			},
		],
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
