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
                { id: 1, name: 'LG', amount: 2 },
                { id: 2, name: 'Samsung', amount: 5 },
                { id: 3, name: 'Sony', amount: 15 },
                { id: 4, name: 'Huawei', amount: 3 },
                { id: 5, name: 'SilverCrest', amount: 22 },
                { id: 6, name: 'Motorola', amount: 8 },
                { id: 7, name: 'NoName', amount: 11 },
                { id: 8, name: 'Apple', amount: 6 }
            ]
        }

        this.handleAddDevice = this.handleAddDevice.bind(this);
    }

    handleAddDevice(device)
    {
        this.setState({
            devices: [...this.state.devices, 
            Object.assign(device, { id: this.state.devices[this.state.devices.length -1].id + 1 })]
        })
    }

    render()
    {
        return (
            <div style={{ marginBottom: 50 }}> 

                <DeviceForm onAddDevice={ this.handleAddDevice }/>
                <DeviceList devices={ this.state.devices }/>
                
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
