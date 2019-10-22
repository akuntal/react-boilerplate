import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { store } from './store/store';
import { Navbar } from './components/navbar';
import { About } from './pages/about';

const Home = lazy(() => import('./pages/home'));

export const App = () => (
  <Provider store={store}>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Home path="home" />
        <About path="about" />
      </Router>
    </Suspense>
  </Provider>
);
