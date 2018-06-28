import React from 'react';
import './projects.scss';
import spooky from '../../assets/spooky.png';
import groupUp from '../../assets/logo-large.png';
import rwc from '../../assets/RWC-logo.png';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <h1>Projects</h1>
        <section>
          <h2>Group Up</h2>
          <div className='left'>
            <img src={groupUp} alt='group up'/>
          </div>
          <div className='right'>
            <p>A virtual meeting place that allows users to create, edit, update, and delete events.
              Users can also upload photos and make text posts to the event group. Sign-in uses
              basic and bearer authentication, or allows users to sign in using Google OAuth.</p>
            <p>Technologies used: React, redux, express, node, mongoDB, babel, webpack, jest, sass,
              superagent, AWS S3, mongoose, multer.</p>
            <p>Visit it live at <a href='http://groupup.site'>groupup.site</a> or view
              the <a href='https://github.com/Group-Up'>Github</a></p>
          </div>
        </section>
        <section>
          <h2>Spooky Says</h2>
          <div className='left'>
            <img src={spooky} alt='spooky says' className='spooky'/>
          </div>
          <div className='right'>
            <p>A simon-says style game where users follow along with Spooky and his friends to try
              to stay alive as long as possible.</p>
            <p>Technologies used: HTML, CSS, JavaScript</p>
            <p>Play it yourself at <a href='http://spookysays.site'>spookysays.site</a> or visit
              the <a href='https://github.com/sjgeyer/simon-says'>Github</a></p>
          </div>
        </section>
        <section>
          <h2>Run Walk Crawl</h2>
          <div className='left'>
            <img src={rwc} alt='run walk crawl' className='long-image'/>
          </div>
          <div className='right'>
            <p>A pub-crawl generator that takes in a starting location, desired number
            of stops, and preferred budget to make the best pub crawl possible.</p>
            <p>Technologies used: HTML, CSS, JavaScript, jQuery, Zomato API, Google Maps API,
            Handlebars, PostgreSQL, express, page.js, superagent</p>
            <p>Create a crawl at <a href='http://runwalkcrawl.site'>runwalkcrawl.site</a> or visit
            the <a href='https://github.com/Run-Walk-Crawl'>Github</a></p>
          </div>
        </section>
      </div>
    );
  }
}
