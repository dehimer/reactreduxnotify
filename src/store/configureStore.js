import { createStore, compose, combineReducers } from 'redux'
import reducers from '../reducers';

import { routerReducer } from 'react-router-redux'


export default function configureStore (initialState) {

	const store = createStore(
		combineReducers({
			...reducers,
			routing: routerReducer
		}),
		initialState,
		compose(
			// applyMiddleware(...middleware),
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