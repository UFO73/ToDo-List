import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import FormToDo from '../FormToDo/FormToDo';
import ToDo from '../ToDo/ToDo';

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        try {
            const localTodo = localStorage.getItem('todo');
            if (localTodo) setToDoList(JSON.parse(localTodo));
        } catch (error) {
            toast.error('Error retrieving from localStorage');
        }
    }, []);

    useEffect(() => {
        if (toDoList.length) localStorage.setItem('todo', JSON.stringify(toDoList));
    }, [toDoList]);
    
    const handleCheckCompleted = (id) => {
        setToDoList((prevTodoList) =>
            prevTodoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id) => {
        setToDoList((prevTodoList) =>
            prevTodoList.filter((todo) => todo.id !== id)
        );

        toast.error('Delete successfully');
    };

    const addTodoHandler = (value) => {
        setToDoList((prevTodoList) =>
            [
                ...prevTodoList,
                {
                    id: nanoid(),
                    title: value,
                    completed: false,
                },
            ]
        );
        toast.success('Create successfully');
    };

    return (
        <>
            <h1>My To-Do list</h1>
            <FormToDo addTodoHandler={addTodoHandler} />
            {toDoList.length
                ? (
                    <ul>
                        {toDoList.map((todo, idx) => (
                            <ToDo
                                key={todo.id}
                                todo={todo}
                                idx={idx}
                                handleCheckCompleted={handleCheckCompleted}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </ul>
                )
                : null}
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
};

export default ToDoList;
