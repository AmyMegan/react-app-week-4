
import './App.css';

function App() {
  let weatherData = {
    city: "London",
    temperature: "9",
    time: "06:30am",
    description: "Sunny",
    imgURL: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    humidity: "10",
    wind: "5"
  };
  return (
    <div className="App">
      <header className="App-header">
    <div className="container">
      <form>
        <input
          type="text"
          placeHolder="Enter City"
          autoFocus="on"
          size="50"
          px
        />
        <button type="submit" className="btn btn-info">
          🔎
        </button>
        <button type="submit" className="btn-btn-Current">
          📍
        </button>
      </form>
      <h2> {weatherData.city} </h2>
      <ul>
        <li className="time">{weatherData.time}</li>
      </ul>
      <div className="upper">
        <div className="upper">
          <h1 div="current">
            <br />
            <img src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"  alt="image of the weather elements"/>
            {weatherData.description}
            <span>
              {" "}
              <a href="./" className="active" rel="noreferrer">
                {weatherData.temperature}°C
              </a>
              <a href="./" className="active2" rel="noreferrer">
                |°F
              </a>
            </span>
            <p> </p>
          </h1>
        </div>
        <ul>
          <li className="info">
            <img
              src="https://img.icons8.com/color/50/000000/hygrometer.png"
              alt="humidity"
              width="50px"
            />
            <div>{weatherData.humidity}</div>
          </li>
          <li className="info2">
            <img
              src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_41-512.png"
              alt="wind"
              width="40px"
            />
            <div>{weatherData.wind}</div>
          </li>
        </ul>
        <div className="holder">
          <div className="row">
            <div className="col">
              <div>
                <img src={weatherData.imgURL} alt="image of weather elements"/>
                <p className="temp"> Sunny </p>
                <footer>
                  I'm on
                  <a
                    href="https://github.com/AmyMegan/AmyMegan"
                    className="Github"
                    target="_blank"
                  >
                    {" "}
                    Github!
                  </a>
                </footer>
                <footer>
                  <a
                    href="https://www.linkedin.com/in/amy-costall-a1ba46131/"
                    className="Linked-In"
                    target="_blank"
                  >
                    Open-Source Code By Amy Costall
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </header>
    </div>
  );
}

export default App;
