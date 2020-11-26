import React from "react";
import { Card } from "react-bootstrap";

const WeatherInfo = ({ weather }) => {
  const tempCelcius = weather ? (weather.main.temp - 273.15).toFixed(2) : "";
  const tempFahrenheit = weather ? (1.8 * tempCelcius + 32).toFixed(2) : "";

  return (
    <Card className="bg-dark text-white main-content">
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Card.Title>
          {weather?.name} / {weather?.sys.country}
        </Card.Title>
        <Card.Text className="text-success h1">
          {tempCelcius}°C / {tempFahrenheit}°F
        </Card.Text>
        <Card.Text className="text-info text-captialize h2">
          {weather?.weather[0]?.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherInfo;
