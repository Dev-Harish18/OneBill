import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GetProducts from "./GetProducts";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const location = useLocation();
  console.log(location.user);
  // const [path, setPath] = useState("");
  let path = "";
  path = location.pathname;
  localStorage.setItem("path", path);
  // // useEffect(() => {
  // //   setPath(location.pathname);
  // // }, [])
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          // path = location.pathname;
          // console.log(`Current Path ${path}`);
          return <Component {...rest} {...props} />;
        } else {
          alert("Please Login first");
          // setPath(ppath);
          // console.log(`Previous Path ${path}`)
          return (
            <Redirect
              to="/"
              // to={{
              //   pathname: "/",
              //   state: {
              //     from: props.location,
              //   },
              // }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
