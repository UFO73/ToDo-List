import { AiOutlineClose } from 'react-icons/ai';

import css from './ToDo.module.css';

const ToDo = ({ todo, handleCheckCompleted, handleDelete, idx }) => (
    <li className={css.li}>
        <div className={css.box}>
            <input
                className={css.checkbox}
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckCompleted(todo.id)}
            />
            <p className={css.p}>{idx + 1}.</p>
            <p className={css.p}>{todo.title}</p>
        </div>
        <button
            className={css.button}
            disabled={!todo.completed}
            type="button"
            aria-label='Close'
            onClick={() => handleDelete(todo.id)}
        >
            <AiOutlineClose />
        </button>
    </li>
);

export default ToDo;