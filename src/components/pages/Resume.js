import React from 'react';
import resume from '../assets/resume.pdf';
import '../assets/css/resume.css'

function Resume() {
  return (
    <main className='resume'>
      <section className='resume-download'>
        <p className='resume-download-text'>Download my resume</p>
        <a href={resume} className='resume-download-link' download>Download</a>
      </section>
      <section className='resume-proficiencies'>
        <div className='resume-frontend'>
          <h3>Frontend Proficiencies</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>SASS/SCSS</li>
          </ul>
        </div>
        <div className='resume-backend'>
          <h3>Backend Proficiencies</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Resume;
