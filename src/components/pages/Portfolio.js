import React from 'react';
import '../assets/css/portfolio.css';
import Weather from '../assets/WeatherForecast.png';
import KRN from '../assets/krn.png';
import SocialNetwork from '../assets/SocialNetwork.png';
import CMSBlog from '../assets/CMSBlog.png';
import EmployeeTracker from '../assets/EmployeeTracker.png';
import TextEditor from '../assets/TextEditor.png';

const projects = [
  {
    name: 'KRN',
    image: KRN,
    link: 'https://github.com/devkjoon/krn',
    description: 'A fitness application that allows users to track their workouts and fitness goals. KRN is a group project with contributions from Liam Allen, Joon Kim, Trenton Kirchner, and Alexandria White',
  },
  {
    name: 'Social Network API',
    image: SocialNetwork,
    link: 'https://github.com/alexandriawhite/Social-Network-API',
    description: 'A RESTful API for a social network web application, using MongoDB and Express.js.',
  },
  {
    name: 'CMS-Style Blog',
    image: CMSBlog,
    link: 'https://github.com/alexandriawhite/CMS-Style-Blog',
    description: 'A content management system-style blog built with MySQL, Sequelize, and Express.js.',
  },
  {
    name: 'Employee Tracker',
    image: EmployeeTracker,
    link: 'https://github.com/alexandriawhite/Employee-Tracker',
    description: 'A command-line application that allows users to manage a company database of employees.',
  },
  {
    name: 'Weather Forecast',
    image: Weather,
    link: 'https://github.com/alexandriawhite/Weather-Forecast',
    description: 'A weather application that displays current weather data and a 5-day forecast for a user-specified location.',
  },
  {
    name: 'Text Editor',
    image: TextEditor,
    link: 'https://github.com/alexandriawhite/Text-Editor',
    description: 'A web-based text editor that allows users to create, edit, and save plain text documents.',
  }
];

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="card">
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.name} className="card-image" />
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

