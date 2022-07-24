import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Weather/>
      </header>
    </div>
  );
}

export default App;
