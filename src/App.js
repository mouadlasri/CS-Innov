import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage.js';
import Aboutpage from './components/Aboutpage/Aboutpage.js';
import Eventpage from './components/Eventpage/Eventpage.js';
import Footer from './components/Footer/Footer.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Homepage} />
          <Route path='/aboutus' component={Aboutpage} />
          <Route path='/events' component={Eventpage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
