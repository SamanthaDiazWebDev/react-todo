import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainFile from './MainFile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainFile/>} />
        <Route exact path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;