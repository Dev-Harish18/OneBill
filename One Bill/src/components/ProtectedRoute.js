import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GetProducts from "./GetProducts";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const location = useLocation();
  console.log(location.user);
  
  let path = "";
  path = location.pathname;
  localStorage.setItem("path", path);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          alert("Please Login first");
          
          return (
            <Redirect
              to="/"
              
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
