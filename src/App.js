import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;