import { configureStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddeleware = createSagaMiddleware();

const rootReducer = combineReducers({});

const composedEnhancer = composeWithDevTools(
	applyMiddleware(
		// Add whatever middleware you actually want to use here
		applyMiddleware(sagaMiddleware)
		// other store enhancers if any
	)
);

export const store = configureStore(rootReducer, composedEnhancer);

sagaMiddeleware.run();
