import Search from "./Search.js";
import "./styles.css";

export default function Place(prop) {
  return (
    <div className="Place">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossOrigin="anonymous"
      ></script>
      <h2>
        {prop.city} <br />
        {prop.temp}° F
      </h2>
      <br />
      <div className="conditions">
        <span className="row">
          <p className="col-6">Humidity: {prop.humidity}%</p>
          <p className="col-6">Condition: {prop.condition}</p>
          <p className="col-6">Chance of rain: {prop.chance}%</p>
          <p className="col-6">Feels like: {prop.feels}°</p>
        </span>
        <br />
        <Search />
      </div>
      <br />
      <small> Coded by Violet Red </small>
    </div>
  );
}
