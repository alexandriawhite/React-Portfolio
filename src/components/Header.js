import React from 'react';
import NavTabs from './NavTabs';
import './assets/css/header.css';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <a href="/">
          <h1>Alexandria White</h1>
        </a>
      </div>
      <nav className="nav">
        <NavTabs />
      </nav>
    </header>
  );
}

export default Header;
