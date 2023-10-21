import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import NoMatch from './Pages/NoMatch';
import Layout from './Pages/Layout';
function App() {
  return (
    <div className="App">
      <Routes>      
          <Route index element={<Login />} />
          <Route path="blogger" element={<Layout/>}/>
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
