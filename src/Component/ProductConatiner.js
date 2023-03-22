import React, { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import ImageContainer from './ImageContainer';

const ProductConatiner = ({
	category,
	categoryName,
	error,
	status,
	clickHandler,
}) => {
	if (status === 'loading') {
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

	if (status === 'failed') {
		return (
			<div className="slider">
				<h1
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'red',
					}}
				>
					{error + ' reload the page'}
				</h1>
			</div>
		);
	}

	if (status === 'succeeded') {
		return (
			<div className="container">
				<button
					onClick={(e) => clickHandler(e.target)}
					className="handle left-handle"
				>
					<div className="text">&#8249;</div>
				</button>
				<div className="slider">
					<ImageContainer category={category} categoryName={categoryName} />
				</div>
				<button
					onClick={(e) => clickHandler(e.target)}
					className="handle right-handle"
				>
					<div className="text">&#8250;</div>
				</button>
			</div>
		);
	}
};

export default ProductConatiner;
