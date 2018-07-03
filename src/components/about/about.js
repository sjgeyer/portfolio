import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';
import me from '../../assets/me.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='about-blurb-left'>
          <img src={me} alt='me'/>
        </div>
        <div className='about-blurb-right'>
          <h1>About Me</h1>
          <p>Full-stack developer with experience in the MERN stack and a background in customer
            service and environmental non-profits. Passionate about web design and data management
            with a focus on efficiency and optimizing user experience.</p>
        </div>

        <section className='left'>
          <div className='inner tech'>
            <h2>Technical Skills</h2>
            <div>
              <h3>Languages</h3>
              <p>JavaScript, HTML, CSS, SQL, Ruby, R</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>Git, GitHub, React, Redux, jQuery, Sass, Node, REST APIs, PostgreSQL, MongoDB,
                Jest, Heroku, Travis Continuous Integration, Webstorm, VS Code, Atom, artillery.io,
                Socket.io</p>
            </div>
            <div>
              <h3>Operating Systems</h3>
              <p>OS X, Windows, iOS, Android</p>
            </div>
            <div>
              <h3>Methodologies</h3>
              <p>Object-Oriented Programming (OOP), functional programming, test-driven development
                (TDD), agile, scrum, MVC, SMACCS</p>
            </div>
          </div>
        </section>
        <section className='right'>
          <div className='inner education'>
            <h2>Degrees & Certifications</h2>
            <div>
              <h3>Code Fellows | Seattle, WA | 2018</h3>
              <p>Certificate - Advanced Software Development in Full-Stack Javascript</p>
            </div>
            <div>
              <h3>University of Washington | Seattle, WA | 2015</h3>
              <p>BS - Ecology, Evolution, and Conservation Biology</p>
              <p>BA - Environmental Studies</p>
              <p>Minor - American Sign Language</p>
            </div>
          </div>
          <Link to='/projects'><button>View my projects</button></Link>
        </section>
      </div>
    );
  }
}
