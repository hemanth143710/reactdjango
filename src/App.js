import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import SecoundComponent from './Components/SecoundComponent';
import React from 'react';
import AppleComponent from './Components/AppleComponent';
import Friut from './Components/Friut';
import Home from './Components/Home';
import Login from './Components/Login';
import Listing from './Components/Listing';





function App() {
 
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/listings' element={<Listing/>}/>

    </Routes>
    </BrowserRouter>
  
  )

}

export default App;
