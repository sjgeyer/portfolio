import React from 'react';
import './projects.scss';
import groupUpLanding from '../../assets/group-up-landing.png';
import pubhubLanding from '../../assets/pubhub-landing.png';
import spookyLanding from '../../assets/spooky-landing.png';
import rwcLanding from '../../assets/rwc-landing.png';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <section>
          <h2>GroupUp</h2>
          <div className='demo'>
            <img src={groupUpLanding} alt='group up'/>
          </div>
          <div className='left'>
            <h3>Description</h3>
            <p> A virtual meeting place that allows users to create and manage events.
                Users can upload photos and make text posts to the event group. Sign-in uses
                basic and bearer authentication, or allows users to sign in using Google OAuth.</p>
          </div>
          <div className='right'>
            <h3>Technologies</h3>
            <p> React, Redux, Express, Node, MongoDB, Babel, Webpack, Jest, Sass,
                AWS S3, Heroku, Travis CI, Google OAuth</p>
            <h4>Visit it live at <a href='http://groupup.site'>groupup.site</a> or view
              the <a href='https://github.com/Group-Up'>Github</a></h4>
          </div>
        </section>
        <section>
          <h2>PubHub</h2>
          <div className='demo'>
            <img src={pubhubLanding} alt='pubhub'/>
          </div>
          <div className='left'>
            <h3>Description</h3>
            <p>A back-end application meant to be a more robust database to Run Walk Crawl. Users
              can create a pub crawl based on the longitude and latitude of their starting location,
              budget, and desired number of stops. They can add the crawl to their profile, upvote
              crawls and stops, and delete stops from their crawl.</p>
          </div>
          <div className='right'>
            <h3>Technologies</h3>
            <p>JavaScript, Node, MongoDB, Express, Jest, GraphHopper API, Google Places API,
              Twilio API, artillery.io, Heroku, Travis CI</p>
            <h4>View the <a href='https://github.com/Pub-Hub'>Github</a></h4>
          </div>
        </section>
        <section>
          <h2>Spooky Says</h2>
          <div className='demo'>
            <img src={spookyLanding} alt='spooky says'/>
          </div>
          <div className='left'>
            <h3>Description</h3>
            <p> A simon-says style game where users follow along with Spooky and his friends to try
                to stay alive as long as possible.</p>
          </div>
          <div className='right'>
            <h3>Technologies</h3>
            <p>HTML, CSS, JavaScript</p>
            <h4>Play it yourself at <a href='http://spookysays.site'>spookysays.site</a> or visit
              the <a href='https://github.com/sjgeyer/simon-says'>Github</a></h4>
          </div>
        </section>
        <section>
          <h2>Run Walk Crawl</h2>
          <div className='demo'>
            <img src={rwcLanding} alt='run walk crawl' className='tall'/>
          </div>
          <div className='left'>
            <h3>Description</h3>
            <p> A mobile-first, full stack pub crawl generator that takes in a starting location,
                desired number of stops, and preferred budget and makes a pub crawl for the user.
                Users can name crawls and save them to their profile.
            </p>
          </div>
          <div className='right'>
            <h3>Technologies</h3>
            <p>HTML, CSS, JavaScript, jQuery, Zomato API, Google Maps API,
                Handlebars, PostgreSQL, Express, Page.js, Heroku</p>
            <h4>Create a crawl at <a href='http://runwalkcrawl.site'>runwalkcrawl.site</a> or visit
              the <a href='https://github.com/Run-Walk-Crawl'>Github</a></h4>
          </div>
        </section>
      </div>
    );
  }
}
