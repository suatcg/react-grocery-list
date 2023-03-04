import React from 'react';
import ErrorBoundary from './ErrorBoundary';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { WindowContextProvider } from '../context/WindowContextProvider';
import { Provider } from 'react-redux';
import { store } from '../store/Store';

const App = () => {
	return (
		<WindowContextProvider>
			<ErrorBoundary>
				<Provider store={store}>
					<div className="App">
						<Header />
						<Content />
						<Footer />
					</div>
				</Provider>
			</ErrorBoundary>
		</WindowContextProvider>
	);
};

export default App;
