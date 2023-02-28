import React from 'react';
import ErrorBoundary from './ErrorBoundary';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { WindowContextProvider } from '../context/WindowContextProvider';

const App = () => {
	return (
		<WindowContextProvider>
			<ErrorBoundary>
				<div className="App">
					<Header />
					<Content />
					<Footer />
				</div>
			</ErrorBoundary>
		</WindowContextProvider>
	);
};

export default App;
