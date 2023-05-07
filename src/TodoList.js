import React from "react";
import TodoListItem from './TodoListItem';


function TodoList({todoList}) {
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <TodoListItem key={item.newTodo.id} todo={item.newTodo} />
          )
      })}
    </ul>
  )
}

export default TodoList;