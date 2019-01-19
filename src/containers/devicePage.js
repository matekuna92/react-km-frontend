import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Device from '../components/device';


    function mapStateToProps(state)
    {

        return {
            device: state.device
        }

    }

    function mapDispatchToProps(dispatch)
    {
        return {
            getDevice: id => dispatch({ id, type: 'GET_DEVICE' })
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Device));

    /* eredeti, egyszerű szöveget visszaadó render
    class devicePage extends Component
{
    render()
    {
        return <p> I am the device details page! Item id: { this.props.match.params.id} </p>
    }
}
*/


