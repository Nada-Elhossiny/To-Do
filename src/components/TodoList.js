import React, { useState, useEffect } from 'react'
import firebase from '../Firebase'

function TodoList() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todoRef = firebase.database().ref('todo')
    // Syncronizing
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val()
      const todoList = []
      for(let id in todos) {
        todoList.push({id,...todos[id]})
      }
      setTodoList(todoList)
    })

  }, [])
  
  return (
    <div className="todo-list">
      {todoList ? todoList.map((todo) => <h1> {todo.task}</h1>) : null}
    </div>
  )
}

export default TodoList