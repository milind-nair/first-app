import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const toUp = () => {
    setText(text.toUpperCase());
  };

  const clearText = () => {
    setText("");
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={toUp}>
          Convert To Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setText(text.toLowerCase())}
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.length} letters, and {text.split(" ").length} words
        </p>
        <p></p>
      </div>
    </>
  );
}
