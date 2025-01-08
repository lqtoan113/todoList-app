import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { Todo } from '../interfaces/todo';
import { fakeApi } from '../services/fakeAPI';

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
  const navigate = useNavigate();


  console.log(todos,'Out useEffect',fakeApi.getTodos(),'fakeApi Out useEffect');


  useEffect(() => {
    
    fakeApi.getTodos().then(setTodos);
    console.log(todos,'In useEffect',fakeApi.getTodos(),'fakeApi In useEffect');

  }, []); // Mảng phụ thuộc rỗng, chỉ chạy khi component mount

  const handleAddTodo = (title: string, decription: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      decription,
      completed: false,
    };

    fakeApi.addTodo(newTodo).then((todo) => {
      setTodos((prevTodos) => [...prevTodos, todo]);  // Cập nhật trực tiếp vào state
    });
  };


  // Hàm cập nhật Todo
  const handleUpdateTodo = (title: string, decription: string) => {
    if (currentTodo) {
      const updatedTodo = { ...currentTodo, title, decription };
      fakeApi.updateTodo(updatedTodo).then(() => {
        setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
        setCurrentTodo(null);  // Reset sau khi cập nhật
      });
    }
  };

  // Hàm đổi trạng thái hoàn thành Todo
  const handleToggleTodo = (id: number) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    if (updatedTodo) {
      updatedTodo.completed = !updatedTodo.completed;
      fakeApi.updateTodo(updatedTodo).then(() =>
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)))
      );
    }
  };

  // Hàm xóa Todo
  const handleDeleteTodo = (id: number) => {
    fakeApi.deleteTodo(id).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  // Hàm xử lý khi click vào todo để điều hướng tới trang About
  const handleTodoClick = (todo: Todo) => {
    navigate(`/about/${todo.id}`, { state: { todo } });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>

      <h1>To do List</h1>
      <TodoForm
        onSubmit={handleAddTodo}
        onUpdate={handleUpdateTodo}
        todoToEdit={currentTodo ? { title: currentTodo.title, decription: currentTodo.decription } : undefined}
      />
      <FilterBar setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onTodoClick={handleTodoClick}
        onEdit={(todo: Todo) => setCurrentTodo(todo)}
      />
    </div>
  );
};

export default HomePage;
