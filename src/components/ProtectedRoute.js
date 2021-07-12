import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, setUser, ...rest }) => {
  const location = useLocation();
  let path = location.pathname;
  localStorage.setItem("path", path);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        alert(user);
        if (user === "true") {
          return <Component {...rest} {...props} />;
        } else {
          alert("Please Login first");
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
