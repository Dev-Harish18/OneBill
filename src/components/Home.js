import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useState } from "react";

export const Home = (props) => {
  const [page, setpage] = useState("");
  sessionStorage.setItem("user", "false");
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          OneBill
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" style={{ color: "white" }} to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/getproducts"
                style={{ color: "white" }}>
                View Products
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/getsubscribers"
                style={{ color: "white" }}>
                View Subscribers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red", color: "white" }}>
                  Login
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
