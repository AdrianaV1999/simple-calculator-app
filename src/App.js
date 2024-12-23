import "./App.css";

import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleClick(value) {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  }

  return (
    <div className="calculator">
      <Display className="display" input={input} result={result} />
      <div className="buttons">
        {[
          "1",
          "2",
          "3",
          "+",
          "4",
          "5",
          "6",
          "-",
          "7",
          "8",
          "9",
          "*",
          "+",
          "0",
          "=",
          "/",
          "C",
        ].map((label) => (
          <Button
            key={label}
            className={`button button-${label}`}
            label={label}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
