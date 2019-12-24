import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";

import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from "./components/layout/Header";
import Home from './components/Home';
import About from './components/About';

class App extends React.Component {
  state = {
    todos: []
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.data)
      .then(data => this.setState({
        todos: data
      }) )
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
      <Router>
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Switch>
              <Route path="/about" >
                <About/>
              </Route>

                <Route path="/">
                  <Home>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} markTodo={this.markTodo} delTodo={this.delTodo} />
                  </Home>
                </Route>
            </Switch>
          </div>
        </div>
      </div>
      </Router >
    );
  }
}

export default App;
