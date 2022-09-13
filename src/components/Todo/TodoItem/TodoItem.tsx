import React from 'react';
import { TodoItem } from '../../../redux/reducers/todoSlice';

export default function Todo({ id, content }: TodoItem) {
  return (
    <div data-hook="todo-item" key={id}>
      {content}
    </div>
  );
}
