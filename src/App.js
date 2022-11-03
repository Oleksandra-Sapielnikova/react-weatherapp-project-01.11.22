import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo"/>
        <footer>
          This project was coded by Oleksandra Sapielnikova and is {""}
          <a
            href="https://github.com/Oleksandra-Sapielnikova/react-weatherapp-project-01.11.22"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
