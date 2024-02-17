import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />
  </React.StrictMode>,
  document.getElementById("root")
);
