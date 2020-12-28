import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import PublicNavbar from "./components/PublicNavbar";
import SideMenu from "./components/SideMenu";
import WeatherInfo from "./components/WeatherInfo";
import { ClipLoader } from "react-spinners";
import { cities } from "./config";

// const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  // states
  const [geoLocation, setGeoLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [apiError, setAPIError] = useState("");
  const url = getURL(geoLocation.latitude, geoLocation.longitude);

  function getURL(latitude, longitude) {
    if (selectedCity)
      return `http://localhost:5000/api/weather?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}`;

    if (!longitude || !latitude) return "";

    return `http://localhost:5000/api/weather?lat=${latitude}&lon=${longitude}`;
  }

  // console.log("start render");

  useEffect(() => {
    console.log("Loading location");
    setLoading(true);
    const onPosition = (position) => {
      setGeoLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
      setLoading(false);
    };
    const onError = (error) => {
      setGeoLocation({
        position: null,
        error: error,
      });
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(onPosition, onError);
    const listener = navigator.geolocation.watchPosition(onPosition, onError);
    return () => navigator.geolocation.clearWatch(listener);
  }, []);

  useEffect(() => {
    console.log("Loading weather");
    if (!url) return;
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
        setAPIError(error.message);
      }
      setLoading(false);
    };
    fetchData(url);
  }, [url]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setSelectedCity(null);
    } else {
      setSelectedCity(city);
    }
  };

  return (
    <>
      <PublicNavbar />
      <Container fluid>
        <Row>
          <Col md={3} className="d-none d-md-block">
            <SideMenu
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={selectedCity}
            />
          </Col>
          <Col md={9}>
            {loading ? (
              <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <ClipLoader color="#f86c6b" size={150} loading={true} />
              </div>
            ) : !apiError ? (
              <WeatherInfo weather={weather} />
            ) : (
              apiError
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
