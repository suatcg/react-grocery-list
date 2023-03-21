import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3500/categories:';

const initialState = {
	category: [],
	status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

export const fetchCategory = createAsyncThunk(
	'category/fetchCategory',
	async (categoryName) => {
		const response = await axios.get(URL);
		return response.data[`${categoryName}`];
	}
);

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCategory.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchCategory.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.category = action.payload;
			})
			.addCase(fetchCategory.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const selectAllCategory = (state) => state.category;

export default categorySlice.reducer;
