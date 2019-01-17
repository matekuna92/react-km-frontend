import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class devicePage extends Component
{
    render()
    {
        return <p> I am the device details page! Item id: { this.props.match.params.id} </p>
    }
}

export default withRouter(devicePage);