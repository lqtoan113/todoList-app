import React, { useState, useEffect } from "react";

interface TodoFormProps {
    onSubmit: (title: string, decription: string) => void;
    onUpdate: (title: string, decription: string) => void; // Thêm prop onUpdate
    todoToEdit?: { title: string; decription: string }; // Thêm prop todoToEdit
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, onUpdate, todoToEdit }) => {
    const [title, setTitle] = useState('');
    const [decription, setDecription] = useState('');
    
    useEffect(() => {
        if (todoToEdit) {
            setTitle(todoToEdit.title);
            setDecription(todoToEdit.decription);
        }
    }, [todoToEdit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && decription.trim()) {
            if (todoToEdit) {
                onUpdate(title, decription); 
            } else {
                onSubmit(title, decription); 
            }
            setTitle('');
            setDecription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add to Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Add to Description"
                value={decription}
                onChange={(e) => setDecription(e.target.value)}
            />
            <button type="submit">{todoToEdit ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default TodoForm;
