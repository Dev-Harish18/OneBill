import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetProducts from "./components/GetProducts";
import { Home } from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import GetSubscribers from "./components/GetSubscribers";
import Login from "./components/Login";
import Logout from "./components/Logout";
function App() {
  const [user, setUser] = useState(false);

  const [path, setPath] = useState("");
  useEffect(() => {
    localStorage.setItem("path", "/");
    localStorage.setItem("user", false);
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} user={user} />}
        />
        <Route exact path="/login" render={() => <Login setUser={setUser} />} />
        <Route
          exact
          path="/logout"
          render={() => <Logout setUser={setUser} />}
        />
        <ProtectedRoute
          exact
          user={user}
          setUser={setUser}
          path="/getproducts"
          component={GetProducts}></ProtectedRoute>
        <ProtectedRoute
          exact
          user={user}
          setUser={setUser}
          path="/getsubscribers"
          component={GetSubscribers}></ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
