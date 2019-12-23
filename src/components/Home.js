
import React from "react";

export default class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.age
    };
  }

  makeOlder(){
    this.setState({
      age: this.state.age + 1
    });
  }

  render(){
    return (
        <div className="content">
          <p className="">Este es Home Componer!!</p>
          <p className="">Tu nombre es {this.props.name} y edad {this.state.age}</p>
          <hr/>
          <button onClick={ this.makeOlder.bind(this) } className="btn btn-primary">Hasme viejo!</button>
          <hr/>
          <button onClick={ ()=> this.makeOlder() } className="btn btn-primary">Hasme viejo2!</button>
          <hr/>
          <button onClick={ this.props.greet } className="btn btn-primary">Greet</button>
        </div>
    );
  }
 }
