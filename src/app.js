import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'

import './styles/app.css'
import App from './components/App';
import Home from './components/Home';
import Email from './components/Email';

const initialAppState = {};


const store = configureStore(initialAppState);
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='email' component={Email}/>
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root')
)