import React, { useCallback, useState } from 'react';
import Categories from './Categories';
import Lists from './Lists';
import Products from './Products';
import { fetchCategory } from '../../storeRTK/categorySlice';
import { selectProduct } from '../../storeRTK/productSlice';
import { useSelector } from 'react-redux';

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

	const products = useSelector(selectProduct);

	const [categoryName, SetCategoryName] = useState('Bakery');

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
			<Lists items={products} handleClick={handleClick} />
		</main>
	);
};

export default Content;
