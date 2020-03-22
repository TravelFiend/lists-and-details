import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeyArnold from './characters/HeyArnold';
import OneCharacter from '../components/details/OneCharacter';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HeyArnold} />
        <Route path='/:id' component={OneCharacter} />
      </Switch>
    </Router>
  );
}
