import logo from "./logo.svg";
import "./App.css";
import styles from "./index.css";
import img from "./videos/splash.jpg";
import vid from "./videos/bg.mp4";

function App() {
  return (
    <div className="App">
      <nav className="text-white">
        <a href="#">Bio</a>
        <a href="#">Resume</a>
        <a href="#">Media</a>
      </nav>
      <div className="w-200 h-200 fixed">
        {/* <img
          src={img}
          className="max-h-100 max-w-100"
          alt="dominique star website background"
        /> */}
        <video id="background-video" loop autoPlay muted>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h1>Dominique Star</h1>
      </div>
    </div>
  );
}

export default App;
