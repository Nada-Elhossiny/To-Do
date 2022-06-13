import React, { useState } from 'react'
import firebase from '../Firebase'

function Input() {
  const [task, setTask] = useState('')

  function handleChange(e) {
    setTask(e.target.value)
  }
  function handleClick() {
    const todoRef = firebase.database().ref('todo')  
    const newTodoRef = todoRef.push()
    const todo = {
      task,
      completed: false
    }
    newTodoRef.set(todo)
    setTask("")
  }

  return (
    <div className="input">
      <input type="text" placeholder="Enter a Todo..." value={task} onChange={handleChange} />
      <button className="add-btn" onClick={handleClick}>
      <i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> 
      </button>
    </div>
  )
}

export default Input