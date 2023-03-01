import React, { useMemo, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Categories from './Categories';
import Products from './Products';

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

	const lists = useMemo(
		() => (
			<ul>
				{items.map((item) => (
					<li className="item" key={item.id}>
						<input
							type="checkbox"
							onChange={() => handleClick(item.id)}
							checked={item.checked}
						/>
						<label>{item.item}</label>
						<FaTrashAlt role="button" tabIndex="0" />
					</li>
				))}
			</ul>
		),
		[items]
	);

	const handleClick = (id) => {
		const listItems = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});

		setitems(listItems);
	};

	return (
		<main>
			<Categories />
			<Products />
			{lists}
		</main>
	);
};

export default Content;
