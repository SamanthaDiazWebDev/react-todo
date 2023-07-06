import React from 'react';
import style from './TodoListItem.module.css';
import { ReactComponent as Remove } from '../img/removeButton.svg';
import PropTypes from "prop-types";

const TodoListItem = ({todo, onRemoveTodo }) => {
    const arrangedDate = new Date(todo.DueDate).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });
    return (
        <>
            <li className={style.ListItem}>
                <span className={style.Title}>{todo.title}&nbsp;</span>

                <span className={style.DueDate}>&nbsp;{arrangedDate} <span className={style.tab}> </span> </span>

                <button className={style.removeButton} onClick={ ()=> onRemoveTodo(todo.id) }>
                    <Remove height="19px" width="19px"/>
                </button> 
            </li>
        </>
    );

}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func,
}

export default TodoListItem;