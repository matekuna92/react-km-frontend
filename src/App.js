import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NameInput from './nameInputFile.jsx';

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      firstName: 'Bela',
      lastName: 'Nagy'
    }

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(key, value)
  {
    this.setState({
      [key]: value
    })

    console.log(this.state);
  }


  render() {

    const { firstName, lastName } = this.state;
    const fullName = `${firstName} ${lastName}`;

    return (
      <div>
          Full Name: <b> { fullName } </b> <br />
          <NameInput firstName={ firstName } lastName={ lastName } onNameChange={ this.handleNameChange }> </NameInput>
      </div>
      )
  }
}

export default App;
