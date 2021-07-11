import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const path = localStorage.getItem("path");

  useEffect(() => {
    console.log("Successfully Login" + path);
    sessionStorage.setItem("user", "true");
    setUser(true);
  }, []);

  return <Redirect to={path} />;
};

export default Login;
