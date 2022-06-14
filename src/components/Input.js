import React, { useState } from 'react'
import firebase from '../Firebase'

function Input() {
  // Create a state variable
  const [task, setTask] = useState('')

  // update the state value every time input changes
  function handleChange(e) {
    setTask(e.target.value)
  }

  // Connecting to the database and creating a reference in it
  // Use push(), which is based on timestamp so items added chronologically
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
      <input type="text" placeholder="Enter a task..." value={task} onChange={handleChange} />
      <button className="add-btn" onClick={handleClick}>
      <i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Task</span> 
      </button>
    </div>
  )
}

export default Input