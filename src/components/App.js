import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleEvent = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="counter-container">
      <p className="counter-text">Buttons Clicked {count} times</p>
      <button className="counter-button" onClick={handleEvent} aria-label="Increment counter">
        Click me
      </button>
    </div>
  );
};

export default App;
