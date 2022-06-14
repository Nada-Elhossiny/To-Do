import React from 'react';
import Input from './components/Input'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Input />
      <TodoList />
    </div>
  );
}

export default App;