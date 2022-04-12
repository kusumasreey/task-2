import './App.css';
import addlogo from './addlogo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Button from './button';
import Form from './form';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={<Button/>}></Route>
        <Route exact path='/form' element={<Form/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
