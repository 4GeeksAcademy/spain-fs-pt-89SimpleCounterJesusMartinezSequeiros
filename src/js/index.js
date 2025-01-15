import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById("app"));

setInterval(() => {
    root.render(<SecondsCounter seconds={seconds} />);
    seconds++;
}, 1000);
