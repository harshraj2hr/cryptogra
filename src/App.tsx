import React from 'react';
import logo from './logo.svg'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainComponent from './main-component/MainComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cryptograd/document-analyser" element={<MainComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
