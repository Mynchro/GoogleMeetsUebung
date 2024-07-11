import "./App.css";
import Bilder from "./components/Bilder";
import Header from "./components/Header";
import Emoji from "./components/Emoji";
import ControlBar from "./components/ControlBar"
import './components/ControlBar.css'

function App() {
  return (
    <>
      <Header />
      <Bilder></Bilder>
      <Emoji></Emoji>
      <ControlBar/>
    </>
  );
}

export default App;
