import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";

import "./index.css";
import "tachyons";

import App from "./containers/App.js";

dotenv.config();

ReactDOM.render(<App />, document.getElementById("root"));
