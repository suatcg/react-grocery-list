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
				quantity: 'piece',
			},
			{
				id: '2',
				name: 'croissant',
				url: 'https://via.placeholder.com/220/00FF00?text=2',
				quantity: 'piece',
			},
			{
				id: '3',
				name: 'birthday-cake',
				url: 'https://via.placeholder.com/230/00FF00?text=3',
				quantity: 'piece',
			},
			{
				id: '4',
				name: 'cheesecake',
				url: 'https://via.placeholder.com/240/00FF00?text=4',
				quantity: 'piece',
			},
			{
				id: '5',
				name: 'pretzel',
				url: 'https://via.placeholder.com/240/00FF00?text=5',
				quantity: 'piece',
			},
			{
				id: '6',
				name: 'wafel',
				url: 'https://via.placeholder.com/240/00FF00?text=6',
				quantity: 'piece',
			},
			{
				id: '7',
				name: 'swiss-roll',
				url: 'https://via.placeholder.com/240/00FF00?text=7',
				quantity: 'piece',
			},
			{
				id: '8',
				name: 'doughnut',
				url: 'https://via.placeholder.com/240/00FF00?text=8',
				quantity: 'piece',
			},
			{
				id: '9',
				name: 'wheat-bread',
				url: 'https://via.placeholder.com/240/00FF00?text=8',
				quantity: 'piece',
			},
			{
				id: '10',
				name: 'hamburger-bread',
				url: 'https://via.placeholder.com/240/00FF00?text=8',
				quantity: 'piece',
			},
			{
				id: '11',
				name: 'wheat-bread',
				url: 'https://via.placeholder.com/240/00FF00?text=8',
				quantity: 'piece',
			},
			{
				id: '12',
				name: 'whole-grain-bread',
				url: 'https://via.placeholder.com/240/00FF00?text=8',
				quantity: 'piece',
			},
			{
				id: '13',
				name: 'baguette',
				url: 'https://via.placeholder.com/240/00FF00?text=8',
				quantity: 'piece',
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
				err: '',
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
