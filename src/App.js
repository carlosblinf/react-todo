import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from "./components/layout/Header";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Mi primer todo",
        completed: false
      },
      {
        id: 2,
        title: "Mi mejor cancion",
        completed: false
      },
      {
        id: 3,
        title: "Mi grandioso premio",
        completed: false
      }
    ]
  }

  markTodo = (id) => {
    this.setState({
      todos: this.state.todos.map( todo=>{
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id )]
    });
  }
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length+1,
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markTodo={this.markTodo} delTodo={this.delTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
