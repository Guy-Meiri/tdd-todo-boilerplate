import { createMockStore } from '../store/mockStore';
import { add, delete, getTodos, TodoItem, todoReducer } from './todoSlice';

const todoItem1: TodoItem = { id: '1', content: 'todo item 1' };
describe('todoSlice', () => {
  it('should add a new todo item', () => {
    const { store } = createMockStore({
      preloadedState: { todo: [] },
      reducer: { todo: todoReducer },
    });
    store.dispatch(add(todoItem1));
    expect(getTodos(store.getState().todo)).toEqual([todoItem1]);
  });

  it('should delete an existing todo item', () => {
    const { store } = createMockStore({
      preloadedState: { todo: [todoItem1] },
      reducer: { todo: todoReducer },
    });
    store.dispatch(delete(todoItem1.id));
    expect(getTodos(store.getState().todo)).toEqual([]);
  });
});
