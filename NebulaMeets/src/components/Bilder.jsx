import "./pictures.css";
// 4 bilder für jeden anime einen

const persons = {
  paths: [
    "../src/assets/onepiece.jpg",
    "../src/assets/blacklagoon.jpg",
    "../src/assets/cowboybebop.jpeg",
    "../src/assets/jujutsu-kaisen.jpg",
    "../src/assets/myheroacademia.webp",
    "../src/assets/blackclover.webp",
  ],
  names: ["Gorden", "Max", "Gertrude", "Jürgen", "Gandalf", "Alfons"],
};

const Bilder = () => {
  return (
    <div className="bilder-grid">
      {persons.paths.map((path, index) => (
        <div
          className="bild"
          style={{ backgroundSize: "cover", backgroundImage: `url(${path})` }}
          key={index}
        >
          <p className="anime-name">{persons.names[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default Bilder;
