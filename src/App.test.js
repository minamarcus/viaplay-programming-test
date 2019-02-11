import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
