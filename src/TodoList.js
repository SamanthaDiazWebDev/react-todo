import React from "react";
import TodoListItem from './TodoListItem';


const todoList = [
    {
      id: 1,
      title: 'Pay Rent',
    },
    {
      id: 2,
      title: 'Complete Assignment',
    },
    {
      id: 3,
      title: 'Walk Dog',
    },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <TodoListItem key={item.id} item={item} />
          )
      })}
    </ul>
  )
}

export default TodoList;