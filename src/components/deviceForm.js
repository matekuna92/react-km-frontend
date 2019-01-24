import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class DeviceForm extends Component
{
    constructor()
    {
        super();

        this.state = {
            name: '#1 Device',
            amount: 5
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddDevice = this.handleAddDevice.bind(this);
    }

    
    handleInputChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value // state-ben és a HTML name-ben egyeznie kell az elnevezéseknek
        })
    }

    handleAddDevice()
    {
        const { name, amount } = this.state;

        this.props.onAddDevice({
            name, amount
        });
    }

    render()
    {
        const { name, amount } = this.state;

        return <div>

        <label> Megnevezés: </label>
        <input name="name" value={ name } onChange={ this.handleInputChange } />
        <label> Mennyiség: </label>
        <input name="amount" value={ amount } onChange={ this.handleInputChange } />

        <button onClick={ this.handleAddDevice }> Hozzáad </button>

    </div>
    }
}

DeviceForm.defaultProps = {
    onAddDevice: () => {}       // ha undefined vagy null értéke van, akkor üres metódust csinál belőle
}

DeviceForm.propTypes = {
    onAddDevice: PropTypes.func //.isRequired  // onAddDevice nevű function-t várunk props-on keresztül
}

export default DeviceForm;