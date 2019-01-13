import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class DeviceList extends Component
{
    constructor()
    {
        super();        // react.Component ősosztály konstruktorát meg kell hívni, mielőtt a saját state-et állíthatnom

        this.state = {
            amountGreaterThan: 10
        }
    }

    render()
    {
        return <div>
            
            <label> Összeg nagyobb, mint: </label>
            <input type="number" value={ this.state.amountGreaterThan } onChange={ (event) => this.setState({ amountGreaterThan: event.target.value }) }/> 
        
        <table>

            <thead>
                <tr>
                    <td> Name </td>
                    <td> Amount </td>
                </tr>
            </thead>

            <tbody>

                { this.props.devices.map( (device) => {
                return device.amount > this.state.amountGreaterThan && 
                <tr key= { device.id }> 
                        <td> { device.name } </td> 
                        <td> { device.amount } </td> 
                </tr>
            })}

            </tbody>

        </table>
        </div>
    }
}

DeviceList.propTypes = {
    devices: PropTypes.array.isRequired // devices tömböt várunk props-on keresztül
}

export default DeviceList;