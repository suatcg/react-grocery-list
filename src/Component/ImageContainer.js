import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';

import {
	createProduct,
	selectProduct,
	updateProduct,
} from '../../storeRTK/productSlice';

import './ImageContainer.css';

const ImageContainer = ({ category, categoryName }) => {
	const dispatch = useDispatch();

	const products = useSelector(selectProduct);

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
		const productQuantity = Number(product.querySelector('.image-text').value);

		// Get the Product quantity type
		const quantityType = product
			.querySelector('.image-text')
			.getAttribute('quantitytype');

		// If element is already exist then call the update action else create a new product via dispatch the createProduct action

		const productExist = products.find(
			(product) => product.name === productName
		);

		if (productExist) {
			// Update the existing product
			console.log(`Product ${productName} already exists`);
			dispatch(updateProduct({ name: productName, quantity: productQuantity }));
		} else {
			// Crate new Product via dispatch the CreateProduct action
			dispatch(createProduct(productName, quantityType, productQuantity));
		}
	};

	return category[`${categoryName}`].map((el, idx) => {
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
						onClick={(e) => incrementHandler(e, el.quantity)}
					>
						&#43;
					</button>
				</div>

				<button onClick={(e) => addToList(e.target)} className="add-button">
					Add
				</button>
			</div>
		);
	});
};

export default React.memo(ImageContainer);
