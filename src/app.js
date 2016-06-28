import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import './styles/app.css'
import Main from './components/Main';

const initialAppState = {
};


const store = configureStore(initialAppState);

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>
	, document.getElementById('root')
)