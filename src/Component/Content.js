import React, { useCallback, useState } from 'react';
import Categories from './Categories';
import Lists from './Lists';
import Products from './Products';
import { getCategoryFetch } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Content = () => {
	const [items, setitems] = useState([
		{
			id: 1,
			checked: true,
			item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
		},
		{
			id: 2,
			checked: false,
			item: 'Item 2',
		},
		{
			id: 3,
			checked: false,
			item: 'Item 3',
		},
	]);

	const dispath = useDispatch();

	const categoryState = useSelector((state) => state.category);
	const wholeState = useSelector((state) => state);

	const handleClick = useCallback(
		(id) => {
			const listItems = items.map((item) => {
				return item.id === id ? { ...item, checked: !item.checked } : item;
			});
			setitems(listItems);
		},
		[items]
	);

	const categorySelect = useCallback((e) => {
		let category;

		if (e.target.matches('.category-items')) {
			category = e.target.innerText;
			dispath(getCategoryFetch(category));
			console.log(wholeState);
		}
	}, []);

	return (
		<main>
			<Categories categorySelect={categorySelect} />
			<Products categoryState={categoryState} />
			<Lists items={items} handleClick={handleClick} />
		</main>
	);
};

export default Content;
