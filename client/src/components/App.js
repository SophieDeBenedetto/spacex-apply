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
          <h1 className="App-title">SpaceEx</h1>
          <h3 className="App-subtitle">Apply to man the next trip to Mars!</h3>
        </header>
        <AstronautForm />
      </div>
    );
  }
}

export default App;

