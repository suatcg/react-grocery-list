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
	},
});

export const { createProduct } = productSlice.actions;

export const selectProduct = (state) => state.productReducer;

export default productSlice.reducer;
