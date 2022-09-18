import "../App.css";
import React, { lazy, useRef, useState } from "react";

function Input({ article }) {
  const [title, setTitle] = useState(article.title);
  function handleChange(e) {
    setTitle(e.target.value);
    console.log(e.target.value);
    console.log("mettre a jour");
  }
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={title}
        name="firstName"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Input;
