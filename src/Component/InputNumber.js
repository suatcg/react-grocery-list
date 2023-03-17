import React from 'react';

const InputNumber = ({ value }) => {
	return (
		<label className="image-input">
			<input type="number" className="image-text" value={value} />
		</label>
	);
};

export default InputNumber;
