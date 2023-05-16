import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";
import UserSettings from "./UserSettings";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/welcome" /> : <Login />}
        </Route>
        <Route path="/welcome">
          {isLoggedIn ? <Welcome /> : <Redirect to="/" />}
        </Route>
        <Route path="/settings">
          {isLoggedIn ? <UserSettings /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
