import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greet from './components/Greet';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
      {/* <div className="App"> */}
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        {/* <Greet name="Sumaya Akter" />
        <Greet name="Chaiti" />
        <Greet name="Fahim">
          <p>Fahim is the youngest of all those three.</p>
        </Greet> */}
      {/* </div> */}
      </>
    );
  }
}

export default App;
