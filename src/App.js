import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Malfoy",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "Draco",
      animal: "Snake",
      breed: "Python",
    }),
    React.createElement(Pet, {
      name: "Harry",
      animal: "Cat",
      breed: "Crookshanks",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
