
import React from "react";

export default class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.age,
      homeLink: props.initialLink
    };
  }

  makeOlder(){
    this.setState({
      age: this.state.age + 1,
    });
  }

  onChangeLink(){
    this.props.changeLink(this.state.homeLink)
  }

  onHandleChangeLink(event){
    this.setState({
      homeLink: event.target.value
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
          <hr/>
          <input type="text" value={this.state.homeLink}
           onChange={(event) => this.onHandleChangeLink(event)} />
          <br/>
          <button onClick={ this.onChangeLink.bind(this) } className="btn btn-primary">Change Header</button>
        </div>
    );
  }
 }
