import React, { useCallback, useEffect, useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import LazyImage from './Image';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductConatiner = ({ category, err, loading, clickHandler }) => {
	if (loading) {
		document.querySelector('.progress-item').style.display = 'none';
		return (
			<SkeletonTheme className="container">
				<Skeleton
					color="grey"
					highlightColor="#AAA"
					className="handle "
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

	const Images = useMemo(() => {
		return category.map((el) => {
			return (
				<LazyLoadImage
					delayTime={250}
					delayMethod="throttle"
					useIntersectionObserver={true}
					threshold={500}
					effect="blur"
					key={el.id}
					src={el.url}
					alt={el.name}
				/>
			);
		});
	}, [category]);

	const scrollPosition = useCallback((el) => {
		const img = el.getAttribute(alt);
	}, []);

	return (
		<div className="container">
			<button
				onClick={(e) => clickHandler(e.target)}
				className="handle left-handle"
			>
				<div className="text">&#8249;</div>
			</button>
			<div className="slider">{Images}</div>
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
