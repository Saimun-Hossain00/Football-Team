import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import Nomatch from './NoMatch/Nomatch';
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
