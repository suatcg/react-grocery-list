import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = () => [
	{
		id: 1,
		checked: true,
		name: 'Cocoa Covered Almonds Unsalted',
		quantity: 1,
		type: 'piece',
		date: sub(new Date(), { minutes: 10 }).toISOString(),
	},
	{
		id: 2,
		checked: false,
		name: 'Grape',
		quantity: 1,
		type: 'kg',
		date: sub(new Date(), { minutes: 5 }).toISOString(),
	},
	{
		id: 3,
		checked: false,
		name: 'Rose jam',
		quantity: 1,
		type: 'piece',
		date: sub(new Date(), { minutes: 2 }).toISOString(),
	},
];

export const productSlice = createSlice({
	name: 'product',
	initialState: initialState(),

	reducers: {
		createProduct: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(name, type, quantity) {
				return {
					payload: {
						id: nanoid(),
						checked: false,
						name,
						quantity,
						type,
						date: new Date().toISOString(),
					},
				};
			},
		},
		updateProduct: (state, action) => {
			const productIndex = state.findIndex(
				(el) => el.name === action.payload.name
			);

			state[productIndex].quantity += action.payload.quantity;
			state[productIndex].date = new Date().toISOString();
		},
		removeProduct: (state, action) => {
			const productIndex = state.findIndex((el) => el.name === action.payload);
			state.splice(productIndex, 1);
		},
		sortProduct: (state, _) => {
			state.reverse();
		},
		removeAllProducts: () => initialState(),
	},
});

export const {
	createProduct,
	updateProduct,
	removeProduct,
	sortProduct,
	removeAllProducts,
} = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
