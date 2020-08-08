import React from 'react';
import logo from './logo.svg';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>

    
  );
}

export default App;
