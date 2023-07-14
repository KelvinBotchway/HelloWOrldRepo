import React from 'react';

function TodoItem({ index, todo, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(index);
  };

  return (
    <li>
      {todo}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
