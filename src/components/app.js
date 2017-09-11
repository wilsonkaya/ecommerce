import React, { Component } from 'react';
import Header from "./header"
import {Route, Switch} from "react-router-dom"
import Signin from './auth/signin'
import Signout from './auth/signout'
import Signup from './auth/signup'
import Feature from './feature'
import Main from './main'
import RequireAuth from './auth/require_auth'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} />
          <Route path="/feature" component={RequireAuth(Feature)} />
          <Route path="/main" component={RequireAuth(Main)} />
          <Route exact path="/" render={() => <div>welcome to the landing</div>} />
        </Switch>
      </div>
    );
  }
}
