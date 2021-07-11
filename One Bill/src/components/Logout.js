import { useHistory, Redirect } from "react-router-dom";
import { useEffect } from "react";

const Logout = ({ user, setUser }) => {
  const history = useHistory();
  useEffect(() => {
    setUser(false);
    sessionStorage.setItem("user", "false");
    localStorage.setItem("path", "/");
  }, []);
  return <Redirect to="/" />;
};

export default Logout;
