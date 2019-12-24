/* eslint-disable react/jsx-no-undef */
import React from "react";
class Home extends React.Component {
  render(){
    return (
        <div>
          <h3>Home</h3>
          { this.props.children }
        </div>
    );
  }
 }

export default Home;
