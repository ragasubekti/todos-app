import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Routes from "./router";
import "./styles/index.css";

ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.unregister();
