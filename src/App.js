import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NameInput from './nameInputFile.jsx';

class App extends Component {

  render() {

    const firstName = 'Bela';
    const lastName = 'Nagy';

    return (
      <div>
          Name: 
          <NameInput firstName={ firstName } lastName={ lastName }> </NameInput>
      </div>
      )
  }
}

export default App;
