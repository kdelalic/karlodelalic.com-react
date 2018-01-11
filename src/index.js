import React from "react";
import ReactDOM from "react-dom";
import App from './js/app'
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
registerServiceWorker();