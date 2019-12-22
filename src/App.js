import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    let user = {
      name: "Carlos",
      age: 21,
      hobbies: ["nadar", "programar", "leer"]
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Header/>
        </div>
        
        
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Home user={user} juegos={10} lenguaje={"programacion"} >
            <p className="">parrafo desde app</p>
          </Home>
        </div>
        
      </div>
    </div>
  );
  
}

export default App;
