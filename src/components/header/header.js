import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/projects'>PROJECTS</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </nav>
      </header>
    );
  }
}
