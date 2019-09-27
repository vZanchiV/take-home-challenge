import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import './assets/styles.scss';
import App from './container/app';
import thunk from "redux-thunk";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider
      store={createStoreWithMiddleware(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>,
    document.getElementById('root')
  );



