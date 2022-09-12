import React from 'react';
import TodoList from './TodoList';
import { render, screen } from '../../../__tests__/utils/testRenderer';
// import userEvent from '@testing-library/user-event';

describe('TodoList', () => {
  it('should have add todo button', () => {
    render(<TodoList />);
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
  });

  it('should have input field to insert a new todo button', () => {
    render(<TodoList />);
    expect(screen.getByTestId('add-todo-input')).toBeInTheDocument();
  });
  //   it('should create new todo item', ()=>{

  //   })
});
