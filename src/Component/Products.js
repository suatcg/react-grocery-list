import React, { useCallback, useEffect } from 'react';
import './Product.css';
import onHandleClick from '../utils/Handle';
import calculateProgressBar from '../utils/ProgressBarCalc';
import { useSelector } from 'react-redux';

import 'react-loading-skeleton/dist/skeleton.css';
import ProductConatiner from './ProductConatiner';
import { selectAllCategory } from '../../storeRTK/categorySlice';

const Products = ({ categoryName }) => {
	const { category, status, error } = useSelector(selectAllCategory);

	useEffect(() => {
		if (status === 'succeeded') {
			function progressBarforceCalc() {
				if (document.querySelectorAll('.progress-bar')) {
					document.querySelector('.progress-bar').style.display = 'flex';

					document
						.querySelectorAll('.progress-bar')
						.forEach(calculateProgressBar);
				}
			}

			progressBarforceCalc();
		}

		if (status === 'failed' || status === 'loading') {
			document.querySelector('.progress-bar').style.display = 'none';
		}
	}, [status]);

	useEffect(() => {
		if (status === 'succeeded') {
			function handleResize() {
				document
					.querySelectorAll('.progress-bar')
					.forEach(calculateProgressBar);
			}
			// Attach the event listener to the window object
			window.addEventListener('resize', handleResize);

			handleResize();

			// Remove the event listener when the component unmounts
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, [status]);

	const clickHandler = useCallback((item) => {
		let handle;

		if (item.matches('.handle')) {
			handle = item;
		} else if (item.matches('.text')) {
			handle = item.closest('.handle');
		} else return;

		if (handle) {
			const progressBar = handle.closest('.row').querySelector('.progress-bar');
			const slider = handle.closest('.container').querySelector('.slider');
			onHandleClick(handle, progressBar, slider);
		}
	}, []);

	const progressClick = (actualBar, index = 0) => {
		document.querySelectorAll('.progress-item').forEach((barItem, idx) => {
			if (barItem.isSameNode(actualBar)) {
				index = idx;
			}
			if (barItem.classList.contains('active')) {
				barItem.classList.remove('active');
			}
		});
		actualBar.classList.add('active');

		const slider = actualBar.closest('.row').querySelector('.slider');

		slider.style.setProperty('--slider-index', index);
	};

	return (
		<div className="product-container">
			<div className="row">
				<div className="header">
					<h4 className="title">{categoryName}</h4>
					<div
						onClick={(e) => progressClick(e.target)}
						className="progress-bar"
					></div>
				</div>
				<ProductConatiner
					category={category}
					error={error}
					status={status}
					clickHandler={clickHandler}
				/>
			</div>
		</div>
	);
};

export default Products;
