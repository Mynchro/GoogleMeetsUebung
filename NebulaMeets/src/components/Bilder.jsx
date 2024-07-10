import React from "react";
import "./pictures.css";
// 4 bilder für jeden anime einen

const persons = {
  paths: [
    "../src/assets/image.png",
    "../src/assets/image.png",
    "../src/assets/image.png",
    "../src/assets/image.png",
    "../src/assets/image.png",
    "../src/assets/image.png"
  ],
  names: [
    "Gorden",
    "Max",
    "Gertrude",
    "Jürgen",
    "Gandalf",
    "Alfons"
  ]
}

const Bilder = () => {
  return (

    <div className="bilder-grid">
      {persons.paths.map((path, index) => (
        <div className="bild" style={{ backgroundSize: "cover", backgroundImage: `url(${path})` }} key={index}>

          <p>{persons.names[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default Bilder;

