import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";
import ShoppingCartPopup from "./ShoppingCart";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
      <div>
        <NavBar />       
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );