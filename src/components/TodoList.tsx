import React from 'react';
import { Todo } from '../interfaces/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (todo: Todo) => void;
    onTodoClick: (todo: Todo) => void; // Xác định kiểu cho onTodoClick
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit, onTodoClick }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onTodoClick={onTodoClick}  // Truyền prop onTodoClick vào TodoItem
                />
            ))}
        </div>
    );
};

export default TodoList;
