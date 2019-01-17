import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

class DeviceList extends Component
{
    constructor()
    {
        super();        // react.Component ősosztály konstruktorát meg kell hívni, mielőtt a saját state-et állíthatnom

        this.state = {
            amountGreaterThan: 10
        }

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(device)
    {
        this.props.history.push(`/device/${device._id}`);
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

            { this.props.isLoading && <p> Betöltés alatt... </p> }

                { this.props.devices.map( (device) => {
                return device.amount > this.state.amountGreaterThan && 
                <tr key= { device._id } onClick={ () => this.onItemClick(device) }> 
                        <td> { device.name } </td> 
                        <td> { device.amount } </td> 
                </tr>
            })}

            </tbody>

        </table>
        </div>
    }
}

DeviceList.defaultProps = {
    isLoading: false
}

DeviceList.propTypes = {
    devices: PropTypes.array.isRequired, // devices tömböt várunk props-on keresztül
    isLoading: PropTypes.bool
}

export default withRouter(DeviceList);      // this.props.history.push('/devices'); csak withRouter-rel működik