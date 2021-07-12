import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Login = ({ setUser }) => {
  const path = localStorage.getItem("path");

  useEffect(() => {
    console.log("Successfully Login" + path);
    localStorage.setItem("user", "true");
    setUser(true);
  }, []);

  return <Redirect to={path} />;
};

export default Login;
