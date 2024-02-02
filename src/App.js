import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Welcome to Air Bender</h1>
        <button>Upload a file</button>
      </header>
    </div>
  );
}

export default App;
