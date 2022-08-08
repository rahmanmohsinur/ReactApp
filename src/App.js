import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greet from './components/Greet';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Greet name="Sumaya" />
        <Greet name="Chaiti" />
        <Greet name="Fahim">
          <p>Fahim is the youngest of all those three.</p>
        </Greet>
      </div>
    );
  }
}

export default App;
