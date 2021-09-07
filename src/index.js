import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// video esta las paginas en esta parte yo lastengo en app
import "./index.css";
import App from "./routers/App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
