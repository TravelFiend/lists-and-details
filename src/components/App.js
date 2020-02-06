import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Final from '../containers/Final';
import OneCharacter from '../components/details/OneCharacter';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Final} />
        <Route path='/:id' component={OneCharacter} />
      </Switch>
    </Router>
  );
}
