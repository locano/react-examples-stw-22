import React from "react";
import ReactDOM from "react-dom";

import StartApp from "./components/startApp.js"
import Board from "./components/game.js"
import "./index.css"
ReactDOM.render(
  <Board/>,
  document.getElementById("root")
);
