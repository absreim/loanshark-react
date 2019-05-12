import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom'

import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Loanshark</Link></h1>
        <nav>
          <Link to="/all-loans">Loans</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/all-loans" component={AllLoans} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
