import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import GetProducts from "./components/GetProducts";
import { Home } from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import GetSubscribers from "./components/GetSubscribers";
import Login from "./components/Login";
import Logout from "./components/Logout";
function App() {
  const [user, setUser] = useState(false);

  const [path, setPath] = useState("");
  let history = useHistory();
  useEffect(() => {
    localStorage.setItem("path", "/");
  }, []);

  
  

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} user={user} />}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              user={user}
              setUser={setUser}
              path={path}
              setPath={setPath}
            />
          )}
        />
        <Route
          exact
          path="/logout"
          render={() => (
            <Logout
              user={user}
              setUser={setUser}
              path={path}
              setPath={setPath}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/getproducts"
          user={user}
          component={GetProducts}></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/getsubscribers"
          user={user}
          component={GetSubscribers}></ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
