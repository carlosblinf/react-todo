import React from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from "./Header";
import TodoItem from "./TodoItem";
import Home from "./Home";
import User from './User';

class Todos extends React.Component {

    markTodo = () => {

    }

    render(){
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        { this.props.todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} markTodo={this.props.markTodo} />
                        ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
    
}

export default Todos;
