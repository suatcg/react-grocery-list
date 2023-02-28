import React from 'react';
import ErrorBoundary from './ErrorBoundary';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
	return (
		<ErrorBoundary>
			<div className="App">
				<Header />
				<Content />
				<Footer />
			</div>
		</ErrorBoundary>
	);
};

export default App;
