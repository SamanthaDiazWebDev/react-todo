import React from "react";
import TodoListItem from './TodoListItem';
import style from "./TodoList.module.css";
import PropTypes from "prop-types";


function TodoList({todoList, onRemoveTodo }) {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {todoList.map((item) => {
          return (
            <TodoListItem 
              key={item.id} 
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          )
        })}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array, 
  onRemoveTodo: PropTypes.func,
}

export default TodoList;