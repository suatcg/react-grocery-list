import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'product',
	initialState: [
		// name: {
		// 	type: 'kg',
		// 	quantity: 1,
		// },
		{
			name: 'none',
			type: 'kg',
			quantity: 1,
		},
	],
	reducers: {
		createProduct: (state, action) => {
			const hasObject = state.some((el) => el.name === action.payload.name);

			if (!hasObject) {
				state.push(action.payload);
			}
		},

		increment: (state, action) => {
			// find index of product according to the given name
			const productIndex = state.findIndex((el) => el.name === action.name);

			// Update Product quantity according to it's type
			state[productIndex].type === 'kg'
				? (state[productIndex].quantity += 0.1)
				: (state[productIndex].quantity += 1);
		},
		decrement: (state) => {
			// find index of product according to the given name
			const productIndex = state.findIndex((el) => el.name === action.name);

			// Update Product quantity according to it's type
			state[productIndex].type === 'kg'
				? (state[productIndex].quantity -= 0.1)
				: (state[productIndex].quantity -= 1);
		},
	},
});

export const { createProduct, increment, decrement } = productSlice.actions;

export const selectProduct = (state) => state.productReducer;

export default productSlice.reducer;
