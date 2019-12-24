import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
           return {
               backgroundColor: '#f4f4f4',
               padding: '10px',
               borderBottom: '1px #ccc dotted',
               textDecoration: this.props.todo.completed ? 'line-through':'none'
           }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()} >
                <p>
                <input type="checkbox"  onChange={this.props.markTodo.bind(this, id) } /> {' '}
                {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired

}

//styles
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    boder: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursos: 'pointer',
    float: 'right'
}

export default TodoItem;
