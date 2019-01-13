import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import NameInput from './nameInputFile.jsx';
import DeviceForm from './components/deviceForm';
import DeviceList from './components/deviceList';

class App extends Component {
    constructor()
    {
        super();

        this.state = {
            devices: [
                { id: 1, name: 'Device 1', amount: 3 },
                { id: 2, name: 'Device 2', amount: 5 }
            ]
        }
    }
x
    render()
    {
        return (
            <div>

                <DeviceList devices={ this.state.devices }/>
                <DeviceForm />


            </div>
        )
    }
}

export default App;


  /*
  constructor()
  {
    super();

    this.state = {
      firstName: 'Bela',
      lastName: 'Nagy',
      clickCount: 0
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePlusOneClick = this.handlePlusOneClick.bind(this);
  }

  handleNameChange(key, value)
  {
    this.setState({
      [key]: value
    })

    console.log( {'key': key, 'value': value} );
  }

  handlePlusOneClick()
  {
    this.setState( (state) => {
      return { clickCount: this.state.clickCount + 1 }
    })
  }


  render() {

    const { firstName, lastName } = this.state;
    const fullName = `${firstName} ${lastName}`;

    return (
      <div>
          Full Name: <b> { fullName.length > 3 && fullName } </b> <br />
          <NameInput firstName={ firstName } lastName={ lastName } onNameChange={ this.handleNameChange }> </NameInput>

          <button onClick={ this.handlePlusOneClick }> + 1 </button>

          Counter: <b> { this.state.clickCount } </b>
      
      </div>
      )
  }
}

export default App;

*/
