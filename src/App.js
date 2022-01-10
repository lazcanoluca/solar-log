import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Home />
  </div>
);

export default App;
