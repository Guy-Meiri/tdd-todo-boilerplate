import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/reducers/todoSlice';

export default function TodoList() {
  const todos = useSelector(getTodos);
  console.log(todos);
  return (
    <div data-hook="todo-page">
      <input data-hook="add-todo-input" type="text"></input>
      <button data-hook="add-todo-button">Add Todo</button>
    </div>
  );
}
