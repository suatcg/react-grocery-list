import React, { createContext, useCallback, useEffect, useState } from 'react';

export const WindowContext = createContext({ clientWidth: 0 });

export const WindowContextProvider = ({ children }) => {
	const getVw = useCallback(() => {
		return Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);
	}, []);

	const [clientWidth, setVw] = useState(getVw());

	useEffect(() => {
		const handleResize = () => {
			setVw(getVw());
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [getVw]);
	return (
		<WindowContext.Provider value={{ clientWidth }}>
			{children}
		</WindowContext.Provider>
	);
};
