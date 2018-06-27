import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </nav>
      </header>
    );
  }
}
