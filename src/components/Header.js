import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo"><a href=""><img src="/images/Vector1.svg" alt="Phone" /></a>retaily</div>
      <nav className="nav">
        <a href="#">Что такое Ретейли?</a>
        <a href="#">Установить на IOS</a>
        <a href="#">Установить на Android</a>
      </nav>
      <button className="login-btn">Войти</button>
    </header>
  );
};

export default Header;
