import "./styles.css";
import Place from "./Place.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello👋</h1>
      <hr />
      <Place
        city="New York"
        temp="40"
        humidity="30"
        condition="cloudy"
        feels="13"
        chance="30"
      />
    </div>
  );
}
