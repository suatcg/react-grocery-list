import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import NodeCache from 'node-cache';

const cache = new NodeCache();

const URL = 'http://localhost:3500/categories:';

async function getCategory() {
	const cacheKey = 'category-cache-key';

	// check if the response is cached
	const cachedResponse = cache.get(cacheKey);
	if (cachedResponse) {
		console.log('Response from cache');

		return cachedResponse;
	}

	try {
		// Set cache control headers to enable caching for 60 seconds.
		const config = {
			method: 'get',
			url: URL,
			headers: {
				'Cache-Control': 'max-age=60',
			},
			timeout: 5000, // 5 seconds
		};

		// Make the request and cache the response
		const response = await axios(config);

		cache.set(cacheKey, response.data, 60);
		console.log('Respnse from server');
		return response.data;
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
}

const initialState = {
	category: [],
	status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

// export const fetchCategory = createAsyncThunk(
// 	'category/fetchCategory',
// 	async (categoryName) => {
// 		const response = await axios.get(URL);
// 		return response.data[`${categoryName}`];
// 	}
// );

export const fetchCategory = createAsyncThunk(
	'category/fetchCategory',
	getCategory
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
