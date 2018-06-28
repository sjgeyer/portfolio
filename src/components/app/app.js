import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header';
import '../../style/main.scss';
import Landing from '../landing/landing';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}
