import React from "react";
import TodoListItem from './TodoListItem';
import style from "./TodoList.module.css";


function TodoList({todoList, onRemoveTodo }) {
  return (
    <div className={style.container}>
      <ul>
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

export default TodoList;