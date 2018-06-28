import React from 'react';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import mongo from '../../assets/mongo.png';
import node from '../../assets/node.png';
import postgres from '../../assets/postgres.png';
import r from '../../assets/r.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import ruby from '../../assets/ruby.png';
import sass from '../../assets/sass.png';
import './about.scss';

export default class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <h1>About Me</h1>
        <p>Full-stack developer with experience in the MERN stack and a background in customer
          service and environmental non-profits. Passionate about web design and data management
          with a focus on efficiency and optimizing user experience.</p>
        <section>
          <h2>Languages, Libraries, and Frameworks</h2>
          <div>
            <img src={js} alt='javascript'/>
            <img src={html} alt='html'/>
            <img src={css} alt='css'/>
            <img src={mongo} alt='mongoDB'/>
            <img src={postgres} alt='postgreSQL'/>
            <img src={ruby} alt='ruby'/>
            <img src={r} alt='r'/>
          </div>
          <div>
            <img src={sass} alt='sass'/>
            <img src={node} alt='node'/>
            <img src={react} alt='react'/>
            <img src={redux} alt='redux'/>
          </div>
        </section>
        <section>
          <h2>Hobbies</h2>
          <p>Something here</p>
        </section>
      </div>
    );
  }
}
