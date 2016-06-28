import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import app from '../reducers';

import { routerReducer } from 'react-router-redux'


export default function configureStore (initialState) {

	const store = createStore(
		combineReducers({
			app,
			routing: routerReducer
		}),
		initialState,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	if (module.hot)
	{
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		});
	}

	return store;
}