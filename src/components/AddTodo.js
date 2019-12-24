import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) =>{
    this.setState({
      title: e.target.value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo.bind(this,this.state.title)();
    this.setState({
     title: ''
    });
  }
    render() {
      return (
        <form style={{ display: 'flex' }}
          onSubmit={this.onSubmit} >
          <input style={{flex: '10'}} 
          type="text" name="title"
          value={this.state.title} 
          onChange={this.onChange.bind(this)}
          className="form-control" 
          placeholder="Añadir Todo.." required />
          <button style={{ flex: '1' }} className="btn btn-dark" type="submit">Añadir</button>
        </form>

      )
    }
}

export default AddTodo
