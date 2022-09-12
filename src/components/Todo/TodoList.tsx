import React, { useState } from 'react';

export default function TodoList() {
  const [newTodoInput, setNewTodoInput] = useState('');

  return (
    <div data-hook="todo-page">
      <input
        data-hook="add-todo-input"
        type="text"
        value={newTodoInput}
        onChange={(e) => {
          setNewTodoInput(e.target.value);
        }}
      ></input>
      <button data-hook="add-todo-button">Add Todo</button>
    </div>
  );
}
