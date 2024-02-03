import React from "react";
import "./App.css";
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        | Developed by{" "}
        <a target="_blank" href="https://samarth77.netlify.app/">
          Samarth Gupta
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
