// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Switch} from 'react-router-dom';
import NotFound from '../Auth/NotFound';
import Home from '../Main/Home';
import Logout from '../Auth/logout';
import { Navigate } from 'react-router-dom';
import Login from '../Auth/login';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signin" element={<Login/>} />
                <Route path="/auth/signup" element={<Login/>} />

        <Route exact path="/log" element={<Logout />} />
           <Route path="/home" element={<Home />} />
        <Route path='*' element={<Navigate to="/" />}/>
        
      </Routes>
    </Router>
  );
}

export default Routers;
