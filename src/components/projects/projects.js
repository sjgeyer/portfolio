import React from 'react';
import './projects.scss';
import spooky from '../../assets/spooky.png';
import groupUp from '../../assets/logo-large.png';
import rwc from '../../assets/RWC-logo.png';
import pubhub from '../../assets/pubhub-small.png';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <section>
          <h2>Group Up</h2>
          <div className='left'>
            <img src={groupUp} alt='group up'/>
          </div>
          <div className='right'>
            <h3>Description</h3>
            <p>A virtual meeting place that allows users to create and manage events.
              Users can upload photos and make text posts to the event group. Sign-in uses
              basic and bearer authentication, or allows users to sign in using Google OAuth.</p>
            <h3>Technologies</h3>
            <p>React, Redux, Express, Node, MongoDB, Babel, Webpack, Jest, Sass,
              AWS S3, Heroku, Travis CI, Google OAuth</p>
            <h3>Visit it live at <a href='http://groupup.site'>groupup.site</a> or view
              the <a href='https://github.com/Group-Up'>Github</a></h3>
          </div>
        </section>
        <section>
          <h2>PubHub</h2>
          <div className='left'>
            <img src={pubhub} alt='pubhub'/>
          </div>
          <div className='right'>
            <h3>Description</h3>
            <p>A back-end application created as a more robust database to Run Walk Crawl.</p>
            <h3>Technologies</h3>
            <p>JavaScript, Node, MongoDB, Express, Jest, GraphHopper API, Google Places API,
            Twilio API, artillery.io, Heroku, Travis CI</p>
            <h3>View the <a href='https://github.com/Pub-Hub'>Github</a></h3>
          </div>
        </section>
        <section>
          <h2>Spooky Says</h2>
          <div className='left'>
            <img src={spooky} alt='spooky says' className='spooky'/>
          </div>
          <div className='right'>
            <h3>Description</h3>
            <p>A simon-says style game where users follow along with Spooky and his friends to try
              to stay alive as long as possible.</p>
            <h3>Technologies</h3>
            <p>HTML, CSS, JavaScript</p>
            <h3>Play it yourself at <a href='http://spookysays.site'>spookysays.site</a> or visit
              the <a href='https://github.com/sjgeyer/simon-says'>Github</a></h3>
          </div>
        </section>
        <section>
          <h2>Run Walk Crawl</h2>
          <div className='left'>
            <img src={rwc} alt='run walk crawl' className='long-image'/>
          </div>
          <div className='right'>
            <h3>Description</h3>
            <p>A pub-crawl generator that takes in a starting location, desired number
            of stops, and preferred budget to make the best pub crawl possible.</p>
            <h3>Technologies</h3>
            <p>HTML, CSS, JavaScript, jQuery, Zomato API, Google Maps API,
            Handlebars, PostgreSQL, Express, Page.js, Heroku</p>
            <h3>Create a crawl at <a href='http://runwalkcrawl.site'>runwalkcrawl.site</a> or visit
            the <a href='https://github.com/Run-Walk-Crawl'>Github</a></h3>
          </div>
        </section>
      </div>
    );
  }
}
