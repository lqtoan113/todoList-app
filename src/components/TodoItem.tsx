import React from 'react';
import { Todo } from '../interfaces/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onTodoClick: (todo: Todo) => void; // Thêm prop để gọi khi click vào todo
  onEdit: (todo: Todo) => void; // Thêm prop để gọi khi click vào nút sửa
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onTodoClick, onEdit }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => onTodoClick(todo)} 
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onEdit(todo)}>Edit</button> {/* Nút sửa */}
    </div>
  );
};

export default TodoItem;
