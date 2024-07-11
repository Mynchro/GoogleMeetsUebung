import "./pictures.css";
// 4 bilder für jeden anime einen

const persons = {
  paths: [
    "/images/onepiece.jpg",
    "/images/blacklagoon.jpg",
    "/images/cowboybebop.jpeg",
    "/images/jujutsu-kaisen.jpg",
    "/images/myheroacademia.webp",
    "/images/blackclover.webp",
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
