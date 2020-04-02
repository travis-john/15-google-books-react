import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Saved from './pages/Saved';

function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path='/saved' component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
