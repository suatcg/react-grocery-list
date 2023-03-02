import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Lists = ({ items, handleClick }) => {
	return (
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
	);
};

export default React.memo(Lists);
