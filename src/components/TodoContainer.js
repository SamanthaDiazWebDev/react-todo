import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { ReactComponent as Sort } from '../img/sortButton.svg';
import PropTypes from 'prop-types';
import style from './TodoContainer.module.css';


const TodoContainer = ({ tableName }) => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState('asc');

    const toggleSortDirection = () => {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };
  
    const fetchData = async () => {
      const view = "Grid%20view";
      const queryParam = `view=${view}&sort[0][field]=Title&sort[0][direction]=${sortDirection}`;
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      };

      const urlWithQueryParam = `${url}?${queryParam}`;
      
      try {
        const response = await fetch(urlWithQueryParam, options);
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const todos = data.records.map((todo) => {
          return {
            id: todo.id,
            title: todo.fields.Title,
            /*DueDate: todo.fields.DueDate,*/
            DueDate: todo.createdTime,
          };
        });
  
        setTodoList(todos);
        setIsLoading(false);
  
      } catch (error) {
        console.log(error.message);
      }
    };
  
    useEffect(() => {
      fetchData(); // eslint-disable-next-line
    }, [sortDirection]);
  
    const addTodo = async (title) => {
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`;
      const newTitle = {
        fields: {
          Title: title,
        },
      };
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-type": "application/json",
        }, 
        body: JSON.stringify(newTitle),
      };
  
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        const todo = await response.json();
        const newTodo = {
            id: todo.id,
            title: todo.fields.Title,
            /*DueDate: todo.fields.DueDate,*/
            DueDate: todo.createdTime,
          }; 
  
        console.log(newTodo);
        setTodoList([...todoList, newTodo]);
  
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const removeTodo = async(id) => {
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-type": "application/json",
        },
      };
      try {
        const response = await fetch(url, options);
          if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const newTodoList = todoList.filter(
          item => item.id !== id);
        setTodoList(newTodoList);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    return (
      <>
         <h1> {tableName} </h1> 
         <button className={style.sortButton} onClick={toggleSortDirection}>
          <center>Sort by A to Z</center><Sort height="35px" width="35px"/>
         </button>
  
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? (
            <p>Loading...</p>
          ): (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
        )}
      </>
    );
}

TodoContainer.propTypes = {
  onAddTodo: PropTypes.func,
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};
  
export default TodoContainer;