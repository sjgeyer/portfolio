import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Header from '../header/header';
import Landing from '../landing/landing';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Footer from '../footer/footer';
import '../../style/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Header/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
