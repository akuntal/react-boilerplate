import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { store } from './store/store';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { About } from './pages/about';

export const App = () => (
  <Provider store={store}>
    <Navbar />
    <Router>
      <Home path="home" />
      <About path="about" />
    </Router>
  </Provider>
);
