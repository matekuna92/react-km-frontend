import React, { Component } from 'react';

class NameInput extends Component
{
    constructor(props)
    {
        super(props);
        console.log(props);

        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName

           // firstName: 'Bela',
           // lastName: 'Nagy'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value // ehhez a használhathoz a state-ben és a HTML-ben ugyanúgy kell elnevezni a name változókat!
        })


        console.log(event.target.value);
    }


    render() 
    {
        const { lastName, firstName } = this.state;
        const fullName = `${firstName} ${lastName}`;

        return (
            <div>

                Default state-ben lévő név: <b> {fullName} </b> <br />

                First Name: <input name='firstName' onChange={ this.handleInputChange }/> <br />
                Last Name: <input name="lastName" onChange={ this.handleInputChange }/> 
                
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

