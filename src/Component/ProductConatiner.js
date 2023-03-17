import React, { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import ImageContainer from './ImageContainer';

const ProductConatiner = ({ category, err, loading, clickHandler }) => {
	if (loading) {
		document.querySelector('.progress-bar').style.display = 'none';

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
		document.querySelector('.progress-bar').style.display = 'none';

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
					{err + ' reload the page'}
				</h1>
			</div>
		);
	}

	useEffect(() => {
		// document.querySelector('.progress-item').style.display = 'block';
		document.querySelector('.progress-bar').style.display = 'flex';
	}, []);

	if (category) {
		return (
			<div className="container">
				<button
					onClick={(e) => clickHandler(e.target)}
					className="handle left-handle"
				>
					<div className="text">&#8249;</div>
				</button>
				{/* <div className="slider">{Images}</div> */}
				<div className="slider">
					<ImageContainer category={category} />
				</div>
				{/* <div className="inputs">{quantityItems} </div> */}
				<button
					onClick={(e) => clickHandler(e.target)}
					className="handle right-handle"
				>
					<div className="text">&#8250;</div>
				</button>
			</div>
		);
	}

	// const [valInput, setInputValue] = useState(1.2);

	// const Images = useMemo(() => {
	// 	return category.map((el, idx) => {
	// 		return (
	// 			<div className="image-container" key={idx}>
	// 				<LazyLoadImage
	// 					delayTime={250}
	// 					delayMethod="throttle"
	// 					useIntersectionObserver={true}
	// 					threshold={500}
	// 					// effect="opacity"
	// 					// key={el.id}
	// 					src={el.url}
	// 					alt={el.name}
	// 				/>

	// 				<div className="image-label">
	// 					<button className="quantity-button decrease">&#8722;</button>
	// 					<div className="image-input">
	// 						<span className="image-text">{1.2}</span>
	// 					</div>
	// 					<button className="quantity-button increase">&#43;</button>
	// 					{/* <p className="image-text">kg</p> */}
	// 				</div>

	// 				<button className="add-button">Add</button>
	// 			</div>
	// 		);
	// 	});
	// }, [category]);
};

export default ProductConatiner;
