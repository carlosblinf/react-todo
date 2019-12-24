import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

class Todos extends React.Component {
    render(){
        return (
            <div>
                { this.props.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} 
                    markTodo={this.props.markTodo}
                    delTodo={this.props.delTodo}
                    />
                ))
                }
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
    
}

export default Todos;
