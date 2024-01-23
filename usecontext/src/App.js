import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import { Variables } from "./Variables";

function App() {
  return (
    <Variables>
      <div className="App">
        <h1>APP</h1>
        {/* <h2>{login}</h2> */}
        {/* <button onClick={hiFunction}>
          also this button can acces to hiFunction
        </button> */}
      </div>
      <Nav></Nav>
    </Variables>
  );
}

export default App;
