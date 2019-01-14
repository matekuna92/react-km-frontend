import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
//import NameInput from './nameInputFile.jsx';
import DeviceForm from '../components/deviceForm';
import DeviceList from '../components/deviceList';
import { connect } from 'react-redux';
import { addDevice } from '../actions/actionTypes';
import { getDevices } from '../api/index';

class App extends Component {
    constructor()
    {
        super();

        this.state = {
            apiDevices: []
        }

        this.handleAddDevice = this.handleAddDevice.bind(this);
    }

    handleAddDevice(device)
    {
        this.props.onAddDevice(device);

      // props előtti állapot, ahol a devices array még helyben, itt az App-ban volt definiálva a reducer helyett  
     //   this.setState({
     //       devices: [...this.state.devices, 
     //       Object.assign(device, { id: this.state.devices[this.state.devices.length -1].id + 1 })]
     //  })
    }

    componentDidMount()
    {
        getDevices()
        .then(response => {
            this.setState({
                apiDevices: response.data
            })
            console.log(response.data);
        })
    }

    render()
    {
       // console.log(this.props);
        return (
            <div style={{ marginBottom: 50 }}> 

                <DeviceForm onAddDevice={ this.handleAddDevice }/>
                <DeviceList devices={ this.props.devices }/>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {            // state to props
    return {
        devices: state.device.devices
    }
}

const mapDispatchToProps = (dispatch) => {      // action creator function-ök leválogatása
    return {
        onAddDevice: (device) => dispatch(addDevice(device))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


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
