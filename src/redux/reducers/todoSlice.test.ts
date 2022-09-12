import { createMockStore } from '../store/mockStore';
import { add, getTodoById, getTodos, remove, TodoItem, todoReducer } from './todoSlice';

const todoItem1: TodoItem = { id: '1', content: 'todo item 1' };
const todoItem2: TodoItem = { id: '2', content: 'todo item 2' };
describe('todoSlice', () => {
  it('should add a new todo item', () => {
    const { store } = createMockStore({
      preloadedState: { todo: [] },
      reducer: { todo: todoReducer },
    });
    store.dispatch(add(todoItem1));
    expect(getTodos(store.getState())).toEqual([todoItem1]);
  });

  it('should remove an existing todo item', () => {
    const { store } = createMockStore({
      preloadedState: { todo: [todoItem1] },
      reducer: { todo: todoReducer },
    });
    store.dispatch(remove(todoItem1.id));
    expect(getTodos(store.getState())).toEqual([]);
  });

  it('should let retrive todoItem by ID', () => {
    const { store } = createMockStore({
      preloadedState: { todo: [todoItem1, todoItem2] },
      reducer: { todo: todoReducer },
    });
    const actuallTodo = getTodoById(store.getState().todo, todoItem2.id);
    expect(actuallTodo).toEqual(todoItem2);
  });
});
