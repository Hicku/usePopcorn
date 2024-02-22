import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App-v2";
import StarRating from "./StarRating";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
