import { createSlice } from '@reduxjs/toolkit';

const initialState = () => [
	{
		id: 1,
		checked: true,
		name: 'Cocoa Covered Almonds Unsalted',
		quantity: 1,
		type: 'piece',
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		count: 1,
	},
];

export const searchSlice = createSlice({
	name: 'search',
	initialState: initialState,
	reducers: {
		addToHistory: (state, action) => {
			// Check the product is already exists
			const searchedProductIndex = state.findIndex(
				(prodcut) => prodcut.id === action.id
			);
			// If product exists update its count property else add new product to search History
			if (searchedProductIndex) {
				state[searchedProductIndex].count++;
			} else {
				state.unshift(action.payload);
			}
		},
		deleteHistory: () => initialState(),
	},
});

export const { addToHistory, deleteHistory } = searchSlice.actions;

export const selectSearchHistory = (state) => state;

export default searchSlice.reducer;
