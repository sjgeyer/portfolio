import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <div className='blurb'>
          <h1>Sarah Geyer</h1>
          <p>Full stack software developer</p>
          <Link to='/about'><button>Learn more</button></Link>
        </div>
      </div>
    );
  }
}
