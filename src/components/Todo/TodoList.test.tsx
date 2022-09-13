import React from 'react';
import TodoList from './TodoList';
import { render, screen } from '../../../__tests__/utils/testRenderer';
import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';

const userInput = 'test input';

describe('TodoList', () => {
  it('should have add todo button', () => {
    render(<TodoList />);
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
  });

  it('should have input field to insert a new todo button', () => {
    render(<TodoList />);
    expect(screen.getByTestId('add-todo-input')).toBeInTheDocument();
  });

  it('should write text into input element ', () => {

    render(<TodoList />);
    userEvent.type(screen.getByTestId('add-todo-input'), userInput);
    expect(screen.getByTestId('add-todo-input')).toHaveValue(userInput);
  });

  it('should add new todo item', () => {
    render(<TodoList />);

    userEvent.click(screen.getByTestId('add-todo-input'));
    userEvent.type(screen.getByTestId('add-todo-input'), userInput);
    userEvent.click(screen.getByTestId('add-todo-button'));
    expect(screen.getAllByTestId('todo-item')).toHaveLength(1);
  });

  it('should have a delete button on todo item', () => {
    render(<TodoList />);
    userEvent.click(screen.getByTestId('add-todo-input'));
    userEvent.type(screen.getByTestId('add-todo-input'), userInput);
    userEvent.click(screen.getByTestId('add-todo-button'));
    expect(screen.getByTestId('delete-todo-button')).toBeInTheDocument();
  });


  it('should remove item from list once deleted', () => {
    render(<TodoList />);
    userEvent.click(screen.getByTestId('add-todo-input'));
    userEvent.type(screen.getByTestId('add-todo-input'), userInput);
    userEvent.click(screen.getByTestId('add-todo-button'));
    expect(screen.queryAllByTestId('todo-item')).toHaveLength(1);
    userEvent.click(screen.getByTestId('delete-todo-button'));
    expect(screen.queryAllByTestId('todo-item')).toHaveLength(0);
  });
});
