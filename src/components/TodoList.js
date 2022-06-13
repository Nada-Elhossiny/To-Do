import React, { useState, useEffect } from 'react'
import firebase from '../Firebase'
import Todo from './Todo'

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
      {todoList ? todoList.map((todo, i) => <Todo todo={ todo } key={ i } />) : null}
    </div>
  )
}

export default TodoList