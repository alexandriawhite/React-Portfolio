import React from 'react';
import acwImage from '../assets/ACW.png';
import '../assets/css/about.css';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={acwImage} className="avatar" alt="Alexandria White" />
      <p className="about-text">
        Welcome to my page. I am Alexandria White, a Full Stack Developer currently enrolled in Vanderbilt University's Coding Boot Camp. 
        I am working diligently to master the most in-demand web development technologies, including HTML5, CSS3, JavaScript, jQuery, React.js, 
        Node.js, and more. With a rigorous 24-week curriculum and hands-on collaboration with other professionals on real-world projects, 
        I am gaining valuable experience in full-stack web development, building complex applications to expand my professional portfolio. 
        I am passionate about applying my skills to create innovative solutions and continuously enhancing my knowledge and expertise as a developer.
      </p>
    </div>
  );
}
