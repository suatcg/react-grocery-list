import React from 'react';
import ErrorBoundary from './ErrorBoundary';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { WindowContextProvider } from '../context/WindowContextProvider';
import { Provider } from 'react-redux';
// import { store } from '../store/Store';
import { store, persistor } from '../../storeRTK/store';
import { fetchCategory } from '../../storeRTK/categorySlice';
import { PersistGate } from 'redux-persist/integration/react';

// store.dispatch(fetchCategory('Bakery'));
store.dispatch(fetchCategory());

const App = () => {
	return (
		<WindowContextProvider>
			<ErrorBoundary>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<div className="App">
							<Header />
							<Content />
							<Footer />
						</div>
					</PersistGate>
				</Provider>
			</ErrorBoundary>
		</WindowContextProvider>
	);
};

export default App;
