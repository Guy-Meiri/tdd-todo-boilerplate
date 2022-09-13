import React from 'react';
import { TodoItem } from '../../../redux/reducers/todoSlice';
import { Button, TodoContainer } from './StyledTodo';

interface Props {
  todo: TodoItem;
  onDelete: (id: string) => void;
}
export default function Todo({ todo, onDelete }: Props) {
  return (
    <TodoContainer data-hook="todo-item">
      <div data-hook="todo-content">{todo.content}</div>
      <Button data-hook="delete-todo-button" onClick={() => onDelete(todo.id)}>
        X
      </Button>
    </TodoContainer>
  );
}
