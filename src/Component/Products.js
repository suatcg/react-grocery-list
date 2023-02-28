import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import './Product.css';
import onHandleClick from '../utils/Handle';
import calculateProgressBar from '../utils/ProgressBarCalc';
import throttle from '../utils/throttle';

const Products = () => {
	useEffect(() => {
		document.querySelectorAll('.progress-bar').forEach(calculateProgressBar);
	}, []);

	const resizeThrottle = useCallback(
		throttle(() => {
			document.querySelectorAll('.progress-bar').forEach(calculateProgressBar),
				250;
		}),
		[]
	);

	const handleClick = useCallback((...args) => {
		const [handle, progressBar, slider] = args;

		onHandleClick(handle, progressBar, slider);
	}, []);

	const clickHandler = (e) => {
		let handle;
		if (e.target.classList.contains('handle')) {
			handle = e.target;
		} else {
			handle = e.target.closest('.handle');
		}

		if (handle) {
			const progressBar = handle.closest('.row').querySelector('.progress-bar');
			const slider = handle.closest('.container').querySelector('.slider');
			handleClick(handle, progressBar, slider);
		}
	};

	return (
		<div className="product-container">
			<div className="row">
				<div className="header">
					<h3 className="title">Bakery</h3>
					<div className="progress-bar"></div>
				</div>
				<div className="container">
					<button onClick={clickHandler} className="handle left-handle">
						<div onClick={clickHandler} className="text">
							&#8249;
						</div>
					</button>
					<div onScroll={resizeThrottle} className="slider">
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
					<button onClick={clickHandler} className="handle right-handle">
						<div onClick={clickHandler} className="text">
							&#8250;
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Products;
