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

        this.props.onNameChange(event.target.name, event.target.value);    // app.js-ben lévő event elérése props-on keresztül, ami
                                                                          // az ott lévő HTML-ben pedig meghívja a handleNameChange function-t
    }

    componentWillReceiveProps(prevProps, nextProps)     // eredetileg a state direkt mutálása browser-ben nem módosította a kirenderelt 
    {                                                   // értéket a html-ben, nem követte le a változásokat
        this.setState({
            firstName: nextProps.firstName,
            lastName: prevProps.lastName
        })
    }

    render() 
    {
        const { lastName, firstName } = this.state;

        return (
            <div>

                First Name: <input name='firstName' onChange={ this.handleInputChange } value={ firstName }/> <br />
                Last Name: <input name="lastName" onChange={ this.handleInputChange } value={ lastName }/> 
                
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

