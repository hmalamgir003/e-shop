import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/homepage.component";

const Hats = props => {
  console.log(props);

  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
};

export default App;
