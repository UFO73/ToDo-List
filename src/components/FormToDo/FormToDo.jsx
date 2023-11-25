import { useState } from "react";
import c from './FormToDo.module.css'

const FormToDo = ({addTodoHandler}) => {
   const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            addTodoHandler(todo);
        }
        setTodo('');
    };
    
    return (
        <form onSubmit={handleSubmit} className={c.form}>
                <input placeholder="Create To-Do" type="text" name="todo" value={todo} onChange={handleChange} className={c.input} />
            <button className={c.button} type="submit" >Add To-do</button>
        </form>
    )
};

export default FormToDo;