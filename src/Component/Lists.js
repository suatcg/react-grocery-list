import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import {
	sortProduct,
	removeProduct,
	removeAllProducts,
} from '../../storeRTK/productSlice';

import TimeAgo from './TimeAgo';
import './Lists.css';
import { persistor } from '../../storeRTK/store';

const Lists = ({ items, handleClick }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="product-info">
				<h5 className="product-info--title">Products</h5>
				<button className="sort-button" onClick={() => dispatch(sortProduct())}>
					Sort
				</button>

				<button
					className="remove-button"
					onClick={() => dispatch(removeAllProducts())}
				>
					Remove All
				</button>
			</div>
			<ul className="list-container">
				{items.map((item) => (
					<li className="item" key={item.id}>
						<input
							type="checkbox"
							onChange={() => handleClick(item.id)}
							checked={item.checked}
						/>
						{/* <label>{item.name}</label> */}
						<label
							style={item.checked ? { textDecoration: 'line-through' } : null}
						>{`${item.quantity} ${item.type} -  ${item.name}`}</label>
						<TimeAgo timestamp={item.date} />
						<FaTrashAlt
							onClick={() => dispatch(removeProduct(item.id))}
							role="button"
							tabIndex="0"
						/>
					</li>
				))}
			</ul>
		</>
	);
};

export default React.memo(Lists);
