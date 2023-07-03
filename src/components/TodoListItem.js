import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from "prop-types";

const TodoListItem = ({todo, onRemoveTodo }) => {
    return (
        <>
            <li className={style.ListItem}>
                <span>{todo.title}</span>
                <span>{todo.Priority}</span>

                <button onClick={ ()=> onRemoveTodo(todo.id) }>Remove</button> 
            </li>
        </>
    );

}

TodoListItem.propTypes = {
    todo: PropTypes.array,
    onRemoveTodo: PropTypes.func,
}

export default TodoListItem;