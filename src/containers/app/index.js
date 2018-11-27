import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../header';
import Home from '../home';
import About from '../about';

import './styles.css';

const App = () => (
  <div className='app'>
    <Header />
    <div className='container'>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </div>
  </div>
);

export default App;
