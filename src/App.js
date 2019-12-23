import React from 'react';
import './App.css';

import Todos from './components/Todos';

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

  render() {
    return (
      <div className="container">
        <Todos todos={this.state.todos} markTodo={this.markTodo} />
      </div>
    );
  }
}

export default App;
