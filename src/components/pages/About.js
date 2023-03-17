import React from 'react';
import acwImage from '../assets/ACW.png';
import '../assets/css/about.css';

export default function About() {
  return (
    <div className="parent-container">
      <div className="container">
      <img src={acwImage} className="avatar" alt="Alexandria White" />
        <div className="card">
          <div className="card-body">
            <h1>About Me</h1>
            <p className="about-text">
              Hi, I'm Alexandria White, a full stack web developer currently completing a certification 
              from Vanderbilt University's Full-Stack Web Development Bootcamp. I have gained experience 
              in a variety of frontend and backend technologies, such as HTML5, CSS3, JavaScript, jQuery, 
              React.js, Node.js, and more. I am also pursuing additional learning and training in SuiteScript, 
              which is a scripting language used in NetSuite applications.
            </p>
            <p className="about-text">
              During my bootcamp, I worked on several projects that allowed me to develop my skills in building
               responsive user interfaces and collaborating with other developers. I also gained experience in 
               version control using Git and GitHub.
            </p>
            <p className="about-text">
              In addition to my technical skills, I have experience as a business analysis and financial analyst. 
              As a financial analyst, I prepared and reviewed monthly financial statements with senior leadership to 
              identify key variance drivers and created budget templates for review with functional leaders, identifying 
              opportunities and risks. As a business analyst, I provided support for advanced financial reporting, conducted 
              fit gap analysis, created functional design documents, and implemented technical requirements.
            </p>
            <p className="about-text">
              I'm excited about the opportunity to apply my skills and experience to new and challenging projects. If 
              you're interested in learning more about my experience or would like to discuss a potential project, 
              please don't hesitate to contact me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
