import React, { Component } from 'react';
import spaceship            from '../assets/spaceship.png';
import AstronautForm        from './AstronautForm';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={spaceship} className="App-logo" alt="logo" />
          <br />
          <h1 className="App-title">SpaceEx Application</h1>
        </header>
        <AstronautForm />
      </div>
    );
  }
}

export default App;

