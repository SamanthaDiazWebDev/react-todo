import React from 'react';

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
  }
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>

      <hr />
      {/* render the list */}

      <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
