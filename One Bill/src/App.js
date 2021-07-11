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

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   //sessionStorage.setItem("user","true");
  //   //setUser(sessionStorage.getItem("user"));
  //   console.log("Successfully Login" + localStorage.getItem("path"));
  //   // <Redirect to="/getproducts"></Redirect>\
  //   setUser(true);
  //   setPath(localStorage.getItem("path"));
  //   // console.log(e);
  //   // history.push("/getproducts");
  //   // console.log(path);
  //   // <Redirect
  //   //   to={props.path}
  //   // ></Redirect>
  // };
  const handleLogout = (e) => {
    e.preventDefault();
    //sessionStorage.setItem("user","false");
    setUser(false);
  };

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
  // ) : (
  //    <Redirect to={path} user={user} handleLogout={handleLogout}></Redirect>
  //   // {console.log("hello APp")}
  //           //  {/* {window.location.reload(history.push(path))} */}

  // //   {/* <ProtectedRoute
  // //   //       exact
  // //   //       path={path}
  // //   //       user={user}
  // //   //       handleLogout={handleLogout}
  // //   //       component={GetSubscribers}
  // //   //     ></ProtectedRoute> */}
  // //   // (path==="/getproducts")?
  // //     // <GetProducts user={user}
  // //     // handleLogout={handleLogout}></GetProducts>:<GetSubscribers user={user}
  // //     // handleLogout={handleLogout}></GetSubscribers>
  // );
}

export default App;
