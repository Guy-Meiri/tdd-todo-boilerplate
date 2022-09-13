import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, add, remove } from '../../redux/reducers/todoSlice';
import { AppDispatch } from '../../redux/store/configureStore';
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
    <div
      data-hook="todo-page"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <input
        data-hook="add-todo-input"
        type="text"
        value={newTodoInput}
        onChange={(e) => {
          setNewTodoInput(e.target.value);
        }}
      ></input>
      <button data-hook="add-todo-button" onClick={addTodoHandler}>
        Add Todo
      </button>
      <div>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} onDelete={deleteTodoHandler}></Todo>
        ))}
      </div>
    </div>
  );
}
