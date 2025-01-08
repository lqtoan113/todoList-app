import { Todo } from '../interfaces/todo';

let todos: Todo[] = [
  {
    id: 0, 
    title: "learn react",
    decription: "try learn react",
    completed: true
  },
];

export const fakeApi = {
  getTodos: async (): Promise<Todo[]> => {
    return Promise.resolve(todos);
  },
  addTodo: async (todo: Todo): Promise<Todo> => {
    todos.push(todo);
    return Promise.resolve(todo);
  },
  updateTodo: async (updatedTodo: Todo): Promise<Todo> => {
    todos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    return Promise.resolve(updatedTodo);
  },
  deleteTodo: async (id: number): Promise<void> => {
    todos = todos.filter((todo) => todo.id !== id);
    return Promise.resolve();
  },
};
