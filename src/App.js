
import Routers from './Allroutes/Routers';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import React, { useState } from 'react';
import Forgetpassword from './Auth/forgetpassword';
import Login from './Auth/login';
import Home from './Main/Home';

function App() {
  return (
  <Routers/>
  // <Router>
  //   <Routes>
  //     <Route path='/home' element={<Home/>}></Route>
  //     <Route path='/u/:user/forgot' element={<Forgetpassword/>}></Route>
  //     <Route path='/' element={<Login/>}></Route>
  //   </Routes>
  // </Router>
  );
}

export default App;
