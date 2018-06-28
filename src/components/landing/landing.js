import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/code.jpg';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <img src={hero}/>
        <div className='container'>
          <div className='blurb'>
            <h1>Sarah Geyer</h1>
            <p>Full stack web developer</p>
            <Link to='/about'><button>View my Resume</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
