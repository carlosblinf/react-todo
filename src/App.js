import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      homeLink: "MyApp"
    };
  }
  onGreet(){
    alert('Hello!!')
  }
  onChangeLinkName(name) {
    this.setState({
      homeLink: name
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12">
            <Header homeLink={this.state.homeLink} />
          </div>
          
          
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Home 
            age={10} 
            name={"Carlos"} 
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
             />
          </div>
          
        </div>
      </div>
    );
  }
}
