import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./App";
import { Content } from "./Content";
import "./index.css";

ReactDOM.render(<NavBar />, document.getElementById("root"));
ReactDOM.render(<Content />, document.getElementById("content"));
