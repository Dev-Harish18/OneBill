import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

function GetProducts(props) {
  const [products, setProducts] = useState(null);

  const getAllProducts = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/demo-api/getproducts`)
      .then((result) => {
        console.log(result.data.products.product);
        setProducts(result.data.products.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="header" style={{ textAlign: "center" }}>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            OneBill
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" style={{ color: "white" }} to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Button variant="contained" onClick={getAllProducts}>
                  Fetch
                </Button>
                <br />
              </li>
              <li className="nav-item">
                <Link to="/logout">
                  <Button variant="contained">Log Out</Button>
                </Link>
                <br />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <br />
      <div>
        {products &&
          products.map((product) => {
            return (
              <Container maxWidth="sm">
                <div className="card-group">
                  <div
                    className="card"
                    style={{ backgroundColor: "lightblue" }}>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.categoryName}</p>
                      <p className="card-text">
                        <small className="text-muted">{product.code}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{product.id}</small>
                      </p>
                    </div>
                  </div>
                </div>
                <br />
              </Container>
            );
          })}
      </div>
    </div>
  );
}
export default GetProducts;
