import React, { useState } from "react";
import "./styles.css";
import { database } from "./Database.js";

var cuisineArray = Object.keys(database);

export default function App() {
  const [cuisine, setCuisine] = useState("Korean");

  function clickHandler(cuisine) {
    setCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1
        style={{
          fontFamily: "Kaushan Script, cursive",
          color: "rgb(165, 3, 40)"
        }}
      >
        Flavours 101{" "}
      </h1>
      <p style={{ fontFamily: "Caveat, cursive", fontSize: "1.5rem" }}>
        Guiding you to the good food and best restaurants in Singapore
      </p>
      <section>
        <ul>
          {cuisineArray.map(function (cuisineName) {
            return (
              <li key={cuisineName} onClick={() => clickHandler(cuisineName)}>
                {cuisineName}
              </li>
            );
          })}
        </ul>
        {database[cuisine].map((food) => {
          return (
            <div className="nameCard" key={food.name}>
              <img className="image" src={food.image} alt="poster" />
              <div className="info">
                <p>{food.name}</p>
                <p>{food.Location}</p>
                <p>⭐: {food.Rating}</p>
                <br />
              </div>
              <br />
            </div>
          );
        })}
      </section>
      <div></div>
    </div>
  );
}
