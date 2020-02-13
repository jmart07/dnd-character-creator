import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import CharacterList from '../CharacterList/CharacterList.js'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to='/characters'>Home</Link>

        <Switch>
          <Route path='/characters'>
            <CharacterList />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
