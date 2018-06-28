import React from 'react';
import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <h1>Contact Me</h1>
        <h3><a href='https://www.linkedin.com/in/sarahgeyer/'>LinkedIn</a></h3>
        <h3><a href='https://github.com/sjgeyer'>GitHub</a></h3>
        <h3>Email: sjaygeyer@gmail.com</h3>
      </div>
    );
  }
}
