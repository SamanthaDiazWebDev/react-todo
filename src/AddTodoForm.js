import React from "react";

const AddTodoForm = (props) => {
    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        event.target.reset();
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle" name="title"></input>
            <input type="submit" value="Add" />
        </form>
    );
}

export default AddTodoForm;