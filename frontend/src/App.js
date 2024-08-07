import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login'
import Admin from './components/Admin'
import Adminlogin from './components/Adminlogin'
import Home from './components/Home'
import Update from './components/Update';
import Marks from './components/Marks';
import Profile from './components/Profile.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';
import Todo from './components/Todo';
import AddSubjectForm from './components/AddSubjectForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
    
    <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/logout' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/protected' element={<Protected/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/todos' element={<Todo />}></Route>
      <Route path='/marks' element={<Marks />}></Route>
      <Route path='/about' element={<AboutUs />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
