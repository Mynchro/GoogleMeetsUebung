import "./pictures.css";
// 4 bilder für jeden anime einen

const persons = {
  paths: [
    "../assets/onepiece.jpg",
    "../assets/blacklagoon.jpg",
    "../assets/cowboybebop.jpeg",
    "../assets/jujutsu-kaisen.jpg",
    "../assets/myheroacademia.webp",
    "../assets/blackclover.webp",
  ],
  names: [
    "One Piece",
    "Black Lagoon",
    "Cowboy Bebop",
    "Jujutsu Kaisen",
    "My Hero Academia",
    "Black Clover",
  ],
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
