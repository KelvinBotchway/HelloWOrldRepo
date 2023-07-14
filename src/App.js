import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
