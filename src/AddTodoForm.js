import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from "./AddTodoForm.module.css"

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        if (todoTitle === "") {
            return;
        }
        onAddTodo(todoTitle);
        setTodoTitle('');
    }

    return (
        <div>
            <form onSubmit={handleAddTodo} className={style.addToDoForm}>
            <InputWithLabel
                id="todoTitle"
                value={todoTitle}
                onInputChange={handleTitleChange}
            >

            <strong>Next Task:</strong>
            </InputWithLabel>
            <button className={style.button} type="submit"> &nbsp; Add &nbsp; </button>
            </form>
        </div>
        
    );
}

export default AddTodoForm;