import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

export const productSlice = createSlice({
	name: 'product',
	initialState: [
		// {
		// 	name: 'none',
		// 	type: 'kg',
		// 	quantity: 1,
		// },
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
	],
	reducers: {
		// createProduct: (state, action) => {
		// 	const productIndex = state.findIndex(
		// 		(el) => el.name === action.payload.name
		// 	);

		// 	if (productIndex < 0) {
		// 		state.unshift(action.payload);
		// 	} else {
		// 		state[productIndex].quantity += action.payload.quantity;
		// 	}
		// },
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
			console.log(action.payload);
			debugger;

			state[productIndex].quantity += action.payload.quantity;
			state[productIndex].date = new Date().toISOString();
		},
		removeProduct: (state, action) => {
			const productIndex = state.findIndex((el) => el.name === action.payload);
			state.splice(productIndex, 1);
		},
	},
});

export const { createProduct, updateProduct, removeProduct } =
	productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
