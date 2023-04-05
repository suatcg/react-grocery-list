import React, { useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

import debounce from '../utils/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, selectAllCategory } from '../../storeRTK/categorySlice';
import { all } from 'axios';

import { addToHistory } from '../../storeRTK/searchSlice';
import { deleteHistory } from '../../storeRTK/searchSlice';

const Searchbar = () => {
	const dispatch = useDispatch();
	const ref = useRef();
	const handleSubmit = (e) => e.preventDefault();

	const displayInputHandler = (e) => {
		ref.current.style.display = 'block';
	};
	const { category, status, error } = useSelector(selectAllCategory);

	const [searchResult, setSearchResults] = useState(null);

	const handleSearchChange = (category, status, error, value) => {
		// if (!e.target.value) return setSearchResults(posts);
		// const resultsArray = posts.filter(
		// 	(post) =>
		// 		post.title.includes(e.target.value) ||
		// 		post.body.includes(e.target.value)
		// );
		// setSearchResults(resultsArray);

		dispatch(fetchCategory());

		console.log(category, status, error, value);

		const matchedItems = Object.values(category)
			.flat()
			.filter((product) => product.name.includes(value));

		if (matchedItems.length) {
			setSearchResults(matchedItems);
		} else {
			setSearchResults(value);
		}
	};

	const optimizedFunc = useCallback(
		debounce(handleSearchChange).bind(this, category, status, error),
		[category, status, error]
	);

	return (
		// custom field
		<form className="search" onSubmit={handleSubmit}>
			<input
				className="search__input"
				type="text"
				id="search"
				onChange={(e) => optimizedFunc(e.target.value)}
				ref={ref}
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
