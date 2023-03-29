import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, removeProduct } from '../../storeRTK/productSlice';
import TimeAgo from './TimeAgo';

const Lists = ({ items, handleClick }) => {
	return (
		<ul className="list-container">
			{items.map((item) => (
				<li className="item" key={item.id}>
					<input
						type="checkbox"
						onChange={() => handleClick(item.id)}
						checked={item.checked}
					/>
					{/* <label>{item.name}</label> */}
					<label>{`${item.quantity} ${item.type} -  ${item.name}`}</label>
					<TimeAgo timestamp={item.date} />
					<FaTrashAlt
						onClick={() => dispatch(removeProduct('none'))}
						role="button"
						tabIndex="0"
					/>
				</li>
			))}
		</ul>
	);
};

export default React.memo(Lists);
