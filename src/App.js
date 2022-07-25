import logo from './logo.svg';
import './App.css';
import Weather from "./WeatherSearch";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App in React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Weather />
      </header>
      <footer>
        <a
          href="https://github.com/ok-sana-code/react-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>
        , by Oksana Shvets from{" "}
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          She Codes
        </a>
      </footer>
    </div>
  );
}

export default App;
