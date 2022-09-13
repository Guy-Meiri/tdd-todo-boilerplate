import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, add, remove } from '../../redux/reducers/todoSlice';
import { AppDispatch } from '../../redux/store/configureStore';
import { AddTodo, Button, Container, Title } from './StyledTodoList';
import Todo from './TodoItem/Todo';

export default function TodoList() {
  const [newTodoInput, setNewTodoInput] = useState('');
  const todos = useSelector(getTodos);
  const dispatch = useDispatch<AppDispatch>();
  console.log('test');

  const addTodoHandler = () => {
    dispatch(
      add({
        id: uniqueId(),
        content: newTodoInput,
      })
    );
  };

  const deleteTodoHandler = (id: string) => {
    console.log(id);
    dispatch(remove(id));
  };

  return (
    <Container data-hook="todo-page">
      <Title>
        TO DO
      </Title>
      <AddTodo>
        <input
          data-hook="add-todo-input"
          type="text"
          value={newTodoInput}
          placeholder="Learn TDD :)"
          onChange={(e) => {
            setNewTodoInput(e.target.value);
          }}
        ></input>
        <Button data-hook="add-todo-button" onClick={addTodoHandler}>
          Add Todo
        </Button>
      </AddTodo>

      <div>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} onDelete={deleteTodoHandler}></Todo>
        ))}
      </div>
    </Container>
  );
}
