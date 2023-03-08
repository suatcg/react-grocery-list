import React from 'react';
import './Categories.css';

const Categories = ({ categorySelect }) => {
	return (
		<div className="category-container">
			<ul className="category-list" onClick={(e) => categorySelect(e)}>
				<li className="category-items active-category">Bakery</li>
				<li className="category-items">Vegetables</li>
				<li className="category-items">Meats</li>
			</ul>
		</div>
	);
};

export default Categories;
