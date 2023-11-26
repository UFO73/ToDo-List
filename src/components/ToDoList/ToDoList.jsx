import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import toast, { Toaster } from 'react-hot-toast';

import FormToDo from "../FormToDo/FormToDo";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        const localTodo = localStorage.getItem('todo')
        if (localTodo) setToDoList(JSON.parse(localTodo))
    }, []);

	useEffect(() => {
		toDoList && localStorage.setItem('todo', JSON.stringify(toDoList))
	}, [toDoList])
    
    const handleCheckCompleted = (id) => {
        setToDoList((prevTodoList) => {
            return prevTodoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        })
    };

    const handleDelete = (id) => {
        setToDoList((prevTodoList) => { 
            return prevTodoList.filter((todo) => todo.id !== id )
        });

        toast.error('Delete successfully')
    };

    const addTodoHandler = (value) => {
        setToDoList((prevTodoList) => {
            return [
                ...prevTodoList,
                {
                    id: nanoid(),
                    title: value,
                    completed: false,
                },
            ]
        })
        toast.success('Create successfully')
    };

    return (
        <>
            <h1>My To-Do list</h1>
            <FormToDo addTodoHandler={addTodoHandler} />
            {toDoList && (
                <ul>
                    {toDoList.map((todo, idx) => (<ToDo key={todo.id} todo={todo} idx={idx} handleCheckCompleted={handleCheckCompleted} handleDelete={handleDelete} />))}
                </ul>
            )}
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
};

export default ToDoList;
