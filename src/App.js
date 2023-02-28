import React, { Component } from 'react';
import './style.css';
import './support.css';
import Header from './Header';
import Givesupport from './Givesupport';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Givesupport />
      </div>
    );
  }
}

export default App;
