import React from 'react';
import App from '../src/app';
import Header from '../src/components/Header';
import { Route, Switch } from 'react-router-dom';
import Admin from './Admin';

class User extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/orders" render={() => <Admin />} />
        </Switch>
      </div>
    );
  }
}

export default User;
