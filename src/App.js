import logo from './logo.svg';
import './App.css';
import WeatherSearch from "./WeatherSearch";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App in React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <WeatherSearch />
      </header>
      <footer>
        <a
          className="App-link"
          href="https://github.com/ok-sana-code/react-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>
        , by Oksana Shvets from{" "}
        <a
          className="App-link"
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noreferrer"
        >
          She Codes
        </a>
      </footer>
    </div>
  );
}

export default App;
