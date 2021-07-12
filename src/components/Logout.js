import { Redirect } from "react-router-dom";
import { useEffect } from "react";

const Logout = ({ setUser }) => {
  useEffect(() => {
    setUser(false);
    localStorage.setItem("user", "false");
    localStorage.setItem("path", "/");
  }, []);
  return <Redirect to="/" />;
};

export default Logout;
