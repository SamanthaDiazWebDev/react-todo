import React, { useState } from 'react'; 
import InputWithLabel from './InputWithLabel';
import style from "./AddTodoForm.module.css";
import { ReactComponent as Add } from '../img/addButton.svg';
import PropTypes from  "prop-types";

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
            <button className={style.button} type="submit"> <Add height="19px" width="19px"/> </button>
            </form>
        </div>
        
    );
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
}

export default AddTodoForm;