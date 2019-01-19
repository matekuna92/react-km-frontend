import React, { Component } from 'react';

export default class Device extends Component()
{
    componentDidMount()
    {

        this.props.getDevice(this.props.match.params.id);   // az id a router-től jön
    }

    render()
    {
        const { device } = this.props;
        return <div> { JSON.stringify(device) } </div>
    }
}