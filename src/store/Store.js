import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './middleware/Middleware';
import { getCategoryReducer } from './reducers/CategoryReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ getCategoryReducer });

const composedEnhancer = composeWithDevTools(
	// Add whatever middleware you actually want to use here
	applyMiddleware(sagaMiddleware)
	// other store enhancers if any
);

export const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(rootSaga);
