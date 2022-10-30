import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //from reactstrap
import { AppHeader } from "./components/AppHeader";
import Game from "./components/Game";
import "./App.css";


ReactDOM.render(
  <Router>
    <AppHeader />
    <Game />
  </Router>,
  document.getElementById("root")
);

