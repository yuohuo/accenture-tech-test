import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import './index.css';
import App from './App';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);