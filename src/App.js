import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/oleksasapielnikova/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Oleksandra Sapielnikova
          </a>
          , it is {""}
          <a
            href="https://github.com/Oleksandra-Sapielnikova/react-weatherapp-project-01.11.22"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosten on{" "}
          <a
            href="https://frabjous-swan-515076.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
