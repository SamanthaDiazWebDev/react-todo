import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer'; // eslint-disable-next-line
import style from './App.module.css';

function App() {
  const tableName = process.env.REACT_APP_TABLE_NAME;
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TodoContainer tableName={tableName}/>} />
          <Route exact path="/new" element={<h1>New Todo List</h1>} />
        </Routes>
        <br></br>
        <span className={style.Spacing}></span>
        <footer>
          <h3>Samantha Diaz, 2023</h3>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;