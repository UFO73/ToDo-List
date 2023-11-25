import c from "./ToDo.module.css"
import { AiOutlineClose } from "react-icons/ai";

const ToDo = ({todo, handleCheckCompleted, handleDelete}) => {
    return (
        <li className={c.li}>
                <input className={c.checkbox} type="checkbox" checked={todo.completed} onChange={() => handleCheckCompleted(todo.id)} />
                <p className={c.p}>{todo.title}</p>
            <button className={c.button} disabled={!todo.completed} type="button" aria-label='Close' onClick={() => handleDelete(todo.id)}><AiOutlineClose /></button>
        </li>
    )
};

export default ToDo;