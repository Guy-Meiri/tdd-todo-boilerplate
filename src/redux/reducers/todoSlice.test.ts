import { createMockStore } from '../store/mockStore';

describe('todoSlice', () => {
  it('should create a todo item', () => {
    const { store } = createMockStore({ reducer: { todo: todoSlice.reducer } });
    store.dispatch(create('todo item 1'));
    expect(getTodos(store.getState())).toEqual(['todo item 1']);
  });
});
