import React from 'react';
import './contact.scss';
import me from '../../assets/me.jpg';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className='blurb'>
          <img src={me} alt='me'/>
          <p>If you like what you see, I would love to hear from you!
            Find me at the following places:</p>
          <a href='https://www.linkedin.com/in/sarahgeyer/'><button>LinkedIn</button></a>
          <a href='https://github.com/sjgeyer'><button>GitHub</button></a>
        </div>
      </div>
    );
  }
}
