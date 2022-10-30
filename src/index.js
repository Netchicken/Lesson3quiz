import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //from reactstrap
import Game from "./components/Game";
import "./App.css";


ReactDOM.render(
  <Router>
    <Game />
  </Router>,
  document.getElementById("root")
);

