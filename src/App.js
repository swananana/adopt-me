import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Malfoy",
  //       animal: "Dog",
  //       breed: "Labrador",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Draco",
  //       animal: "Snake",
  //       breed: "Python",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Harry",
  //       animal: "Cat",
  //       breed: "Crookshanks",
  //     }),
  //   ]);

  return (
    <div>
      <h1> Adopt Me! </h1>
      <Pet name="Luna" animal="bird" breed="Swana" />
      <Pet name="Malfoy" animal="Cat" breed="Havana" />
      <Pet name="Draco" animal="Serpant" breed="Havana" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
