import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));

document.querySelectorAll("#root div").forEach(function (domContainer) {
  const article = JSON.parse(domContainer.dataset.article);
  // ReactDOM.render(<App article={article} />, domContainer);

  root.render(
    <React.StrictMode>
      <App article={article} />
    </React.StrictMode>
  );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
