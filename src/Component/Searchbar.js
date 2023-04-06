import React, { useCallback, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import { GiSlicedBread } from 'react-icons/gi';

import debounce from '../utils/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, selectAllCategory } from '../../storeRTK/categorySlice';
import { all } from 'axios';

import { addToHistory } from '../../storeRTK/searchSlice';
import { deleteHistory } from '../../storeRTK/searchSlice';

const Searchbar = () => {
	const dispatch = useDispatch();
	const ref = useRef();
	const asideRef = useRef();
	const handleSubmit = (e) => e.preventDefault();

	const displayInputHandler = () => {
		ref.current.style.display = 'block';
		dispatch(fetchCategory());
	};
	const blurInputHandler = () => {
		ref.current.style.display = 'none';
		asideRef.current.style.maxHeight = 0;
	};
	const { category, status, error } = useSelector(selectAllCategory);

	let content;

	const handleSearchChange = (category, _, _2, value) => {
		asideRef.current.style.maxHeight = '500px';

		const matchedItems = Object.values(category)
			.flat()
			.filter((product) => value.length > 1 && product.name.includes(value));
		// console.log(matchedItems);

		if (matchedItems.length) {
			content = matchedItems;
		} else if (value.length === 0) {
			content = `Type product that you want to add list.`;
		} else {
			content = `Produt is not found by this '${value}' keyword.`;
		}

		console.log(content);
	};

	const optimizedFunc = useCallback(
		debounce(handleSearchChange).bind(this, category, status, error),
		[category, status, error]
	);

	return (
		// custom field
		<>
			<form className="search" onSubmit={handleSubmit}>
				<input
					className="search__input"
					type="text"
					id="search"
					onChange={(e) => optimizedFunc(e.target.value)}
					placeholder="Search for a product..."
					onBlur={blurInputHandler}
					ref={ref}
				/>
				<button className="search__button" onClick={displayInputHandler}>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="search-button--icon"
					/>
				</button>
				<aside ref={asideRef} id="search-results-container">
					{/* your search results will go here  */}
					{Array.isArray(content) &&
						content.map((el) => {
							return (
								<>
									<svg></svg>
									<p></p>
								</>
							);
						})}
					<p>alksdjflakjsdf</p>
				</aside>
			</form>
		</>
	);
};

export default Searchbar;
