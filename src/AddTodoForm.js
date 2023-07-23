import React, { useState } from 'react';
import "./style.css"



function AddTodoForm({ addTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') {
      return;
    }
    addTodo(todo);
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className='submitdiv' onSubmit={handleSubmit}>
      
      <textarea className='input-box' type="text" value={todo} onChange={handleChange} placeholder="Add a new task" />
      <button className='todo-button' type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
