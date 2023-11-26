import { useState } from 'react';

import css from './FormToDo.module.css';

const FormToDo = ({ addTodoHandler }) => {
    const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleClikc = () => {
        if (todo) {
            addTodoHandler(todo);
        }
        setTodo('');
    };

    return (
        <div className={css.form}>
            <input
                placeholder="Create To-Do"
                type="text"
                name="todo"
                value={todo}
                onChange={handleChange}
                className={css.input}
            />
            <button className={css.button} onClick={handleClikc}>Add To-do</button>
        </div>
    )
};

export default FormToDo;