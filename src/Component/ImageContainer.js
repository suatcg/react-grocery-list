import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';

import {
	createProduct,
	increment,
	decrement,
	selectProduct,
} from '../../storeRTK/productSlice';

import './ImageContainer.css';

const ImageContainer = ({ category }) => {
	const dispatch = useDispatch();

	const products = useSelector(selectProduct);
	console.log(products);

	const incrementHandler = (e, quantity) => {
		const inputEl = e.target
			.closest('div.image-label')
			.querySelector('.image-text');

		quantity === 'kg'
			? (inputEl.value = parseFloat(inputEl.value) + 0.5)
			: (inputEl.value = parseInt(inputEl.value) + 1);
	};

	const decrementHandler = (e, quantity) => {
		const inputEl = e.target
			.closest('div.image-label')
			.querySelector('.image-text');

		if (quantity === 'piece' && inputEl.value - 1 !== 0) {
			inputEl.value = parseInt(inputEl.value) - 1;
		}

		if (quantity === 'kg' && inputEl.value - 0.5 !== 0) {
			inputEl.value = parseFloat(inputEl.value) - 0.5;
		}
	};

	const addToList = (element) => {
		// Get the product where user clicked on the page
		const product = element.closest('.image-container');

		// Get the Product name
		const productName = product.querySelector('img').alt;

		// Get the Product quantity amount
		const productQuantity = product.querySelector('.image-text').value;

		// Get the Product quantity type
		const quantityType = product
			.querySelector('.image-text')
			.getAttribute('quantitytype');

		// Crate new Product via dispatch the CreateProduct action
		dispatch(
			createProduct({
				name: productName,
				type: quantityType,
				quantity: productQuantity,
			})
		);
	};

	return category.map((el, idx) => {
		// const product = products.find((product) => product.name == el.name);
		// // console.log(product);

		return (
			<div className="image-container" key={idx}>
				<LazyLoadImage
					delayTime={250}
					delayMethod="throttle"
					useIntersectionObserver={true}
					threshold={500}
					// effect="opacity"
					// key={el.id}
					src={el.url}
					alt={el.name}
				/>
				<span className="image-name">{el.name}</span>

				<div className="image-label">
					<button
						className="quantity-button decrease"
						onClick={(e) => decrementHandler(e, el.quantity)}
					>
						&#8722;
					</button>
					{/* <div className="image-input">
						<span className="image-text">{quantity}</span>
					</div> */}

					<label className="image-input">
						<input
							type="text"
							className="image-text"
							quantitytype={el.quantity}
							value={1}
							onChange={(e) => e.preventDefault()}
						/>
					</label>
					<button
						className="quantity-button increase"
						// onClick={() => dispatch(increment())}
						// onClick={() => setQuantity(quantity + 1)}
						onClick={(e) => incrementHandler(e, el.quantity)}
					>
						&#43;
					</button>
					{/* <p className="image-text">kg</p> */}
				</div>

				<button onClick={(e) => addToList(e.target)} className="add-button">
					Add
				</button>
			</div>
		);
	});
};

export default React.memo(ImageContainer);
