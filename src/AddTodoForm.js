import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
