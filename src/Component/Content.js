import React, { useCallback, useState } from 'react';
import Categories from './Categories';
import Lists from './Lists';
import Products from './Products';
import { getCategoryFetch } from '../store/actions';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../../storeRTK/categorySlice';

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

	const [categoryName, SetCategoryName] = useState('Bakery');

	const dispath = useDispatch();

	// useEffect(() => {
	// 	dispath(getCategoryFetch('Bakery'));
	// }, []);

	// const categoryState = useSelector((state) => state.category);

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
		if (e.target.matches('.category-items')) {
			const categoryText = e.target.innerText;
			SetCategoryName(categoryText);
			// dispath(getCategoryFetch(categoryText));
			dispath(fetchCategory(categoryText));
		}
	}, []);

	return (
		<main>
			<Categories categorySelect={categorySelect} />
			<Products categoryName={categoryName} />
			<Lists items={items} handleClick={handleClick} />
		</main>
	);
};

export default Content;
