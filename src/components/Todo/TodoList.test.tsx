import React from 'react';
import TodoList from './TodoList';
import { render, screen } from '../../../__tests__/utils/testRenderer';

describe('TodoList', () => {
  it('should have add todo button', () => {
    render(<TodoList />);
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
  });
});
