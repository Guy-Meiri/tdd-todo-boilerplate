import React from 'react';
import { TodoItem } from '../../../redux/reducers/todoSlice';
import { TodoContainer } from './StyledTodo';

export default function Todo({ content }: TodoItem) {
  return (
    <TodoContainer data-hook="todo-item">
      <div data-hook="todo-content">{content}</div>
      <button data-hook="delete-todo-button">X</button>
    </TodoContainer>
  );
}
