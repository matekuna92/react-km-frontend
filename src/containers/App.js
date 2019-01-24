import React, { Component } from 'react';
import devicesPage from './devicesPage';
import devicePage from './devicePage';
import { connect } from 'react-redux';
// route behúzása
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

function App(props)
{
  return(
    <div>
      { props.isPending && <div> Loading! </div> }

    
    <Switch>

    <Route path="/devices/:id" component={devicePage} />
    <Route path="/devices" component={devicesPage} />
    <Redirect to="/devices" />

    </Switch>
    </div>
  )
}

function mapStateToProps(state)
{
  return {
    isPending: state.isPending
  }
}

export default connect(mapStateToProps)(App);

