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
				// url: 'https://via.placeholder.com/210/00FF00?text=1',
				url: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
				quantity: 'piece',
			},
			{
				id: '2',
				name: 'croissant',
				url: 'https://images.unsplash.com/photo-1586657263857-346c4b712ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
				quantity: 'piece',
			},
			{
				id: '3',
				name: 'birthday-cake',
				url: 'https://images.unsplash.com/photo-1625649611137-df49dc542f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
				quantity: 'piece',
			},
			{
				id: '4',
				name: 'cheesecake',
				url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
				quantity: 'piece',
			},
			{
				id: '5',
				name: 'pretzel',
				url: 'https://images.pexels.com/photos/13358457/pexels-photo-13358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
				quantity: 'piece',
			},
			{
				id: '6',
				name: 'wafel',
				url: 'https://images.unsplash.com/photo-1485629066172-81a49ed3aa29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
				quantity: 'piece',
			},
			{
				id: '7',
				name: 'swiss-roll',
				url: 'https://images.unsplash.com/photo-1627308592778-290a1ec030da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
				quantity: 'piece',
			},
			{
				id: '8',
				name: 'doughnut',
				url: 'https://images.unsplash.com/photo-1630150275481-fdd323506564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80',
				quantity: 'piece',
			},
			{
				id: '9',
				name: 'wheat-bread',
				url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
				quantity: 'piece',
			},
			{
				id: '10',
				name: 'hamburger-bread',
				url: 'https://images.unsplash.com/photo-1557618194-8b8cecca45d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
				quantity: 'piece',
			},
			{
				id: '11',
				name: 'simit',
				url: 'https://images.unsplash.com/photo-1676272657491-eb21cd5f2095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
				quantity: 'piece',
			},
			{
				id: '12',
				name: 'grain-bread',
				url: 'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
				quantity: 'piece',
			},
			{
				id: '13',
				name: 'baguette',
				url: 'https://images.unsplash.com/photo-1604322796450-ec2c51485442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80',
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
