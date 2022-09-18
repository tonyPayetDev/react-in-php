import logo from "./logo.svg";
import { lazy } from "react";
import "./App.css";
const Input = lazy(() => import("./component/Input"));

function App({ article }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{article.title}
        </p>

        <Input article={article} />
        <Input article={article} />
      </header>
    </div>
  );
}

export default App;
