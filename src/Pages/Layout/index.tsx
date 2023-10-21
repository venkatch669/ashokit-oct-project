import React from 'react';
import logo from './logo.svg';
import './index.scss';
import Header from '../../Components/Header';
import Home from '../Home';
import Footer from '../../Components/Footer';

function Layout() {
  return (
    <div>
        <Header/>
          <Home/>
        <Footer/>
    </div>
  );
}

export default Layout;
