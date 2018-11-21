import React, { Component } from 'react';
import './App.css';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import CardScreen from './containers/CardScreenContainer'
import CardDrawer from './containers/CardDrawerContainer'
import Paginator from './containers/PaginatorContainer';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
      <div className="App">
        <CardScreen />
        <Paginator />
        <CardDrawer />
      </div>
    </JssProvider>
    );
  }
}

export default App;
