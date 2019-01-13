import React, { Component } from 'react';

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
        this.handleAddExpense = this.handleAddExpense.bind(this);
    }

    
    handleInputChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value // state-ben és a HTML name-ben egyeznie kell az elnevezéseknek
        })
    }

    handleAddExpense()
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

        <button onClick={ this.handleAddExpense }> Hozzáad </button>

    </div>
    }
}

export default DeviceForm;