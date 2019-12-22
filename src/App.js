import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Header/>
        </div>
        
        
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Home/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
