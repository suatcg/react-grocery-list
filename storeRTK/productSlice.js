import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'product',
	initialState: [
		{
			name: 'none',
			type: 'kg',
			quantity: 1,
		},
	],
	reducers: {
		createProduct: (state, action) => {
			const productIndex = state.findIndex(
				(el) => el.name === action.payload.name
			);

			if (productIndex < 0) {
				state.unshift(action.payload);
			} else {
				state[productIndex].quantity += action.payload.quantity;
			}
		},
	},
});

export const { createProduct } = productSlice.actions;

export const selectProduct = (state) => state.productReducer;

export default productSlice.reducer;
