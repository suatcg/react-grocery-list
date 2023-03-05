import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import './Product.css';
import onHandleClick from '../utils/Handle';
import calculateProgressBar from '../utils/ProgressBarCalc';
import throttle from '../utils/throttle';

const Products = ({ categoryState }) => {
	useEffect(() => {
		// console.log('progress-bar-initial mount');

		function progressBarforceCalc() {
			document.querySelectorAll('.progress-bar').forEach(calculateProgressBar);
		}

		progressBarforceCalc();

		// return () => console.log('progress-bar unmount');
	}, []);

	useLayoutEffect(() => {
		function handleResize() {
			document.querySelectorAll('.progress-bar').forEach(calculateProgressBar);
		}
		// Attach the event listener to the window object
		window.addEventListener('resize', handleResize);

		handleResize();

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const clickHandler = (item) => {
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

			// handleClick(handle, progressBar, slider);
			// e.stopPropagation();
		}
	};

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

	console.log('Category states: ', categoryState);

	return (
		<div className="product-container">
			<div className="row">
				<div className="header">
					<h3 className="title">Bakery</h3>
					<div
						onClick={(e) => progressClick(e.target)}
						className="progress-bar"
					></div>
				</div>
				<div className="container">
					<button
						onClick={(e) => clickHandler(e.target)}
						className="handle left-handle"
					>
						<div className="text">&#8249;</div>
					</button>
					<div className="slider">
						<img src="https://via.placeholder.com/210/00FF00?text=1" />
						<img src="https://via.placeholder.com/220/00FF00?text=2" />
						<img src="https://via.placeholder.com/230/00FF00?text=3" />
						<img src="https://via.placeholder.com/240/00FF00?text=4" />
						<img src="https://via.placeholder.com/250/00FF00?text=5" />
						<img src="https://via.placeholder.com/260/00FF00?text=6" />
						<img src="https://via.placeholder.com/270/00FF00?text=7" />
						<img src="https://via.placeholder.com/280/00FF00?text=8" />
						<img src="https://via.placeholder.com/250/00FF00?text=9" />
						<img src="https://via.placeholder.com/260/00FF00?text=10" />
						<img src="https://via.placeholder.com/270/00FF00?text=11" />
						<img src="https://via.placeholder.com/280/00FF00?text=12" />
					</div>
					<button
						onClick={(e) => clickHandler(e.target)}
						className="handle right-handle"
					>
						<div className="text">&#8250;</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Products;
