import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Logo from './logo';
import Navbar from './navbar';
import AuthIcon from './auth-icon';
import Home from './home';
import Loans from './loans';
import Directory from './directory';
import Account from './account';

export default function () {
  return (
    <div>
      <header>
        <Logo />
        <Navbar />
        <AuthIcon />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/loans" component={Loans} />
          <Route path="/directory" component={Directory} />
          <Route path="/account" component={Account} />
        </Switch>
      </main>
    </div>
  );
}
