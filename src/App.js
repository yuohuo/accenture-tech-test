import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paginator from './components/Paginator'
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import ScreenGrid from './containers/ScreenGrid'

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
class App extends Component {
  render() {
    return (

      <JssProvider jss={jss} generateClassName={generateClassName}>
      <div className="App">
        <ScreenGrid />
        <Paginator />
      </div>
    </JssProvider>
    );
  }
}

export default App;
