import React from "react";
import data from "./data";
import "./index.css";

const App=()=> {
  return (
    <div className="App">
      <h1>Albums</h1>
      <div className="pictures">
        {data.map((item, index) => (
          <div className="picture" key={index}>
            <div className="imageContainer">
              <img src={item.src.large} alt="" />
            </div>
            <div className="info">
              <span>{item.photographer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
