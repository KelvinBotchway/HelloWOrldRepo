import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import "./style.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, { task: newTodo, completed: false }];
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
    updatedTodos[editIndex].task = editTodo;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTodo('');
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditTodo('');
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    if (updatedTodos[index].completed) {
      setTimeout(() => {
        deleteTodo(index);
      }, 1000); // Automatically remove completed task after 1 second
    }
    setTodos(updatedTodos);
  };

  return (
    <div className='todo-div'>
      <h1>To-Do List</h1>

      <ul className='list-div'>
        {todos.map((todo, index) => (
          <li className='list-list' key={index}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            {editIndex === index ? (
              <div>
                <input
                  type='text'
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.task}
                <button className='delete' onClick={() => deleteTodo(index)}>Delete</button>
                <button className='edit' onClick={() => handleEdit(index, todo.task)}>Edit</button>
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
