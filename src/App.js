import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <header>
      <Header />
    </header>
    <Home />
    <footer>
      
    </footer>
  </div>
);

export default App;
