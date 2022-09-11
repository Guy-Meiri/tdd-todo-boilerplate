import { createMockStore } from '../store/mockStore';
import { add, getTodos, todoReducer } from './todoSlice';

describe('todoSlice', () => {
  it('should create a todo item', () => {
    const { store } = createMockStore({
      preloadedState: { todo: [] },
      reducer: { todo: todoReducer },
    });
    store.dispatch(add('todo item 1'));
    expect(getTodos(store.getState().todo)).toEqual(['todo item 1']);
  });
});
