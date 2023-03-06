import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { getCategoryFetch } from '../store/actions';

const ProductConatiner = ({ category, err, loading, clickHandler }) => {
	console.log(category, err, loading);

	const dispatch = useDispatch();

	if (loading) {
		return (
			<div className="container">
				<Skeleton
					color="grey"
					highlightColor="#444"
					className="handle left-handle"
				>
					<div className="text">&#8249;</div>
				</Skeleton>
				<div className="slider">
					<Skeleton color="grey" highlightColor="#444" count={4} />
				</div>
				<Skeleton
					color="grey"
					highlightColor="#444"
					className="handle right-handle"
				>
					<div className="text">&#8250;</div>
				</Skeleton>
			</div>
		);
	}

	if (err.length > 0) {
		return <h1>{err}</h1>;
	}

	return (
		<div className="container">
			<button
				onClick={(e) => clickHandler(e.target)}
				className="handle left-handle"
			>
				<div className="text">&#8249;</div>
			</button>
			<div className="slider">
				{category.map((el) => {
					return <img key={el.id} src={el.url} alt={el.name} />;
				})}
			</div>
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
