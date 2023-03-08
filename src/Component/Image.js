import React, { useState, useRef, useEffect } from 'react';

const LazyImage = React.memo(({ alt, src }) => {
	const [imageSrc, setImageSrc] = useState(null);
	const imgRef = useRef(null);

	useEffect(() => {
		setImageSrc(null);
	}, [src]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0) {
						setImageSrc(src);
						observer.unobserve(imgRef.current);
					}
				});
			},
			{
				rootMargin: '0px',
				threshold: 0.1,
			}
		);
		observer.observe(imgRef.current);
		return () => {
			observer.unobserve(imgRef.current);
		};
	}, [src]);

	return <img ref={imgRef} src={imageSrc} alt={alt} />;
});

export default LazyImage;
