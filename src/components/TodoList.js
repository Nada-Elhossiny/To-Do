import React, { useState, useEffect } from 'react'
import firebase from '../Firebase'
import Todo from './Todo'

function TodoList() {
    // Fetch data from the database and store it here
  const [todoList, setTodoList] = useState([])

    // Read the data from the database 
  useEffect(() => {
    const todoRef = firebase.database().ref('todo')
    // Syncronizing
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val()
      const todoList = []
      for(let id in todos) {
          // Input the items retrieved from the database into the array
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