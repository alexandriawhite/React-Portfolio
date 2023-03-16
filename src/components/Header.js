import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about" className={`nav-link ${currentPage === 'About' ? 'active' : ''}`} onClick={() => handlePageChange('About')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-link ${currentPage === 'Projects' ? 'active' : ''}`} onClick={() => handlePageChange('Projects')}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`} onClick={() => handlePageChange('Resume')}>
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`} onClick={() => handlePageChange('Contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
