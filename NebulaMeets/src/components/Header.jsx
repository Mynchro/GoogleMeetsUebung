import "../components/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left-side-header">
        <div className="icon">
          <img src="src/assets/breakoutIcon.png" alt="breakoutroom-icon"></img>
        </div>
        <div className="room-title">
          <p>
            In {'"'}Breakout 2{'"'}
          </p>
        </div>
      </div>
      <div className="right-side-header">
        <div className="help">
          <a href="#">Ask for help</a>
        </div>
        <div className="return-to-main">
          <a href="#">Return to main call</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
