import React, { Component } from 'react';

class NameInput extends Component
{
    constructor()
    {
        super();

        this.state = {
            firstName: 'Bela',
            lastName: 'Nagy'
        }

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    }

    handleFirstNameChange(event)
    {
        this.setState({
            firstName: event.target.value
        })


        console.log(event.target.value);
    }


    render() 
    {
        const { lastName, firstName } = this.state;
        const fullName = `${lastName} ${firstName}`;

        return (
            <div>

               Default state-ben lévő név: <b> {fullName} </b> <br />

                First Name: <input name='firstname' onChange={ this.handleFirstNameChange }/> <br />
                Last Name: <input name="lastname" />
            </div>
        )    
    }
}

export default NameInput;


/* export default function NameInput()
{
    return (
        <div>
            First Name: <input name='firstname' onChange={handleFirstNameChange}/> <br />
            Last Name: <input name="lastname" />
        </div>
    )
}

*/
// module.exports = NameInput;

