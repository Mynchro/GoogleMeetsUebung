import "../components/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="leftSideHeader">
        {" "}
        <div className="icon">
          <img src="src/assets/breakoutIcon.png" alt="breakoutroom-icon"></img>
        </div>
        <div className="roomTitle">
          <p>In "Breakout 2"</p>
        </div>
      </div>
      <div className="rightSideHeader">
        {" "}
        <div className="help">
          <p>Ask for help</p>
        </div>
        <div className="returnToMain">
          <p>Return to main call</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
