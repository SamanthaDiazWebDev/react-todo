import React, { useEffect, useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todoList, setTodoList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise ((resolve, reject) => {
      setTimeout(
        () => (resolve)(
          { data: {todoList:
          JSON.parse(localStorage.getItem("savedTodoList"))|| [] } }),
          2000
      );
    })
    .then (result => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(
      item => item.id !== id 
    );
    setTodoList(newTodoList)
  };

  const addTodo = (newTodo) => {
    setTodoList ([...todoList, newTodo]);
  }

  return (
    <>
      <h1>To Do List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
          <p>Loading...</p>
        ): (
            <TodoList todoList={todoList} onRemoveItem={removeTodo}/>
      )}
    </>
  );
}

export default App;