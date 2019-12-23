import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      homeLink: "MyApp",
      homeMounted: true
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
  onChangeHomeMounted(){
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let homCop = "";
    if(this.state.homeMounted){
      homCop = (
        <Home
          age={10}
          name={"Carlos"}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLink={this.state.homeLink}
        />
      );
    }
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12">
            <Header homeLink={this.state.homeLink} />
          </div>
          
        </div>
        <div className="row">
          <div className="col-sm-12">
            {homCop}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-secondary" >(Un)Mount Home Comp</button>
          </div>
        </div>
      </div>
    );
  }
}
