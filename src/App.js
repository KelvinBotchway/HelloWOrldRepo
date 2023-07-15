import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEdit = (index, todo) => {
    setEditIndex(index);
    setEditTodo(todo);
  };

  const handleSave = () => {
    if (editTodo.trim() === '') {
      return;
    }
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editTodo;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTodo('');
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditTodo('');
  };

  return (
    <div className='todo-div'>
      <h1>To-Do List</h1>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
                <div>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button onClick={() => handleEdit(index, todo)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
