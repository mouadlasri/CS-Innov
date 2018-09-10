import React, { Component } from 'react';
import './App.css';
import Toolbar from '../src/components/Toolbar/Toolbar.js';
import Events from '../src/components/Events/Events.js';
import MainSection from '../src/components/MainSection/MainSection.js';
import Footer from '../src/components/Footer/Footer.js';
import Form from '../src/components/Form/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <main style={{marginTop: "56px"}}>
          <MainSection /> 
          <Form />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
