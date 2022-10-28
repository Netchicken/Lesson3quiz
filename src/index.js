import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //from reactstrap
import { AppHeader } from "./components/AppHeader";
import CityGame from "./components/CityGame";
import "./App.css";


ReactDOM.render(
  <Router>
    <AppHeader />
    <CityGame />
  </Router>,
  document.getElementById("root")
);

