import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function GetSubscribers(props) {
  console.log("GetSubs");

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Welcome to Subscribers Page</h3>
      <Link to="/logout">
        {" "}
        <Button variant="contained">Log Out</Button>
      </Link>
    </div>
  );
}

export default GetSubscribers;
