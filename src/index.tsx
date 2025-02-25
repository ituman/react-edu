import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/reducers/rootReducer';
import './index.css';
import App from './App';


const store = createStore(
  rootReducer,
  composeWithDevTools()
)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
