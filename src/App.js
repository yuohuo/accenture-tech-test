import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paginator from './components/Paginator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Paginator />
      </div>
    );
  }
}

export default App;
