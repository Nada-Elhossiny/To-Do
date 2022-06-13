import React from 'react'
import firebase from '../Firebase'

function Todo({ todo }) {
    return (
        <div className = "todo-item">
            <div className = "task">
                <input type = "checkbox" onClick = {completeTodo} checked = {todo.completed}/>
                <p>{todo.task}</p>
            </div>
            <div className = "buttons">
                <button className = "del-btn"><i className = "fa fa-trash" aria-hidden= "true"></i></button>
            </div>
        </div>
    )
}

export default Todo