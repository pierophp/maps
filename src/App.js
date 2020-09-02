import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import MapChart from "./components/MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
