import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Object from './components/Object';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Object />} />
      {/* <Route path='/about' element={<About />} />
      <Route path='/*' element={<NotFound />} /> */}
    </Routes>
  </Router>
);

export default App;
