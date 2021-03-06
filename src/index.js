import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./assets/css/bootstrap.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";

import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/css-hamburgers/hamburgers.css";
import "./assets/css/main.css";
import "./assets/css/util.css";

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// if (module.hot) {
//   module.hot.accept();
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
