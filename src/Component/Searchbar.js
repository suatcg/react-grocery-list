import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

import debounce from '../utils/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, selectAllCategory } from '../../storeRTK/categorySlice';

const Searchbar = () => {
	const { category, status, error } = useSelector(selectAllCategory);
	const dispatch = useDispatch();

	const handleSubmit = (e) => e.preventDefault();

	const displayInputHandler = (e) => {
		const input = e.target.closest('.search').querySelector('.search__input');

		input.style.display = 'block';
	};

	const handleSearchChange = (value) => {
		// if (!e.target.value) return setSearchResults(posts);
		// const resultsArray = posts.filter(
		// 	(post) =>
		// 		post.title.includes(e.target.value) ||
		// 		post.body.includes(e.target.value)
		// );
		// setSearchResults(resultsArray);
		dispatch(fetchCategory());

		console.log(value);
		console.log(status);
	};

	const optimizedFunc = useCallback(debounce(handleSearchChange), []);

	return (
		// custom field
		<form className="search" onSubmit={handleSubmit}>
			<input
				className="search__input"
				type="text"
				id="search"
				onChange={(e) => optimizedFunc(e.target.value)}
			/>
			<button className="search__button" onClick={displayInputHandler}>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="search-button--icon"
				/>
			</button>
		</form>
	);
};

export default Searchbar;
