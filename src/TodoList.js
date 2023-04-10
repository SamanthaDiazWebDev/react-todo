import React from "react";

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
                    <li key={item.id}>
                        {item.title}
                    </li>
                )
            })}
      </ul>
    );
}

export default TodoList;