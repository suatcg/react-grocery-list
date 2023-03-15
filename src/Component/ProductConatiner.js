import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
	LazyLoadImage,
	LazyLoadComponent,
} from 'react-lazy-load-image-component';
import './ProductContainer.css';

const ProductConatiner = ({ category, err, loading, clickHandler }) => {
	if (loading) {
		document.querySelector('.progress-item').style.display = 'none';
		return (
			<SkeletonTheme className="container">
				<Skeleton
					color="grey"
					highlightColor="#AAA"
					className="handle skeleton"
					// duration={2.5}
					// height="55"
				></Skeleton>
			</SkeletonTheme>
		);
	}

	if (err.length > 0) {
		document.querySelector('.progress-item').style.display = 'none';
		return (
			<h1
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'red',
				}}
			>
				{err + ' reload the page'}
			</h1>
		);
	}

	useEffect(() => {
		document.querySelector('.progress-item').style.display = 'block';
	}, []);

	function quantityHandler() {
		console.log('quantityHandler');
	}

	const [valInput, setInputValue] = useState(1.2);

	const Images = useMemo(() => {
		return category.map((el, idx) => {
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

					<div className="image-label">
						<button className="quantity-button decrease">&#8722;</button>
						<div
							className="image-input"
							// onChange={quantityHandler}
							// type="number"
							// step={0.1}

							// defaultValue={1}
						>
							<span className="image-text">{valInput}</span>
						</div>
						<button className="quantity-button increase">&#43;</button>
						{/* <p className="image-text">kg</p> */}
					</div>

					<button className="add-button">Add</button>
				</div>
			);
		});
	}, [category]);

	return (
		<div className="container">
			<button
				onClick={(e) => clickHandler(e.target)}
				className="handle left-handle"
			>
				<div className="text">&#8249;</div>
			</button>
			<div className="slider">{Images}</div>
			{/* <div className="inputs">{quantityItems} </div> */}
			<button
				onClick={(e) => clickHandler(e.target)}
				className="handle right-handle"
			>
				<div className="text">&#8250;</div>
			</button>
		</div>
	);
};

export default ProductConatiner;
