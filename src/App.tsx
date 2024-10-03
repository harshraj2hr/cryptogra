import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainComponent from './main-component/MainComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/cryptogra">
        <Routes>
          <Route path="/cryptograd/document-analyser" element={<MainComponent />} />
          <Route path="/" element={<MainComponent />} /> 
        </Routes>
      </Router>
    </div>
  );
}
export default App;
