import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => (
  <Provider store={store}>
    <div>App</div>
  </Provider>
);
