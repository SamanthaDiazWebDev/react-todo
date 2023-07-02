import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import style from './App.module.css';

function App() {
  const tableName = process.env.REACT_APP_TABLE_NAME;
  return (
    <BrowserRouter>
      <nav className={style.navbarContainer}>
          <h3>Get Started &nbsp;</h3>
          <h3>&nbsp;</h3>
          <h3>In Progress &nbsp;</h3>
          <h3>&nbsp;</h3>
          <h3>Completed</h3>
      </nav>
        <Routes>
          <Route exact path="/" element={<TodoContainer tableName={tableName}/>} />
          <Route exact path="/new" element={<h1>New Todo List</h1>} />
        </Routes>
      <footer>
        <h3>Samantha Diaz, 2023</h3>
      </footer>
    </BrowserRouter>
  );
};

export default App;