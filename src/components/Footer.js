import React from 'react';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import twitterLogo from './assets/twitter-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/alexandriawhite" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/alexandria-white2/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://twitter.com/alexandriawhite" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
