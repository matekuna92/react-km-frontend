import React, { Component } from 'react';
import devicesPage from './devicesPage';
import devicePage from './devicePage';
// route behúzása
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

export default function App()
{
  return(
    <Switch>

    <Route path="/devices" component={devicesPage} />
    <Route path="/device" component={devicePage} />

    </Switch>
  )
}

