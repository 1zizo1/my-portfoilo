// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Mobile() {
  const [term, setTerm] = useState('london');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    searchWeather(term);
  }, [term]);

  async function searchWeather(term) {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${term}&days=3`);
      if (response.status === 200) {
        setWeather(response.data);
      }
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  }

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchClick = () => {
    searchWeather(term);
  };

  const displayCurrent = (location, current) => {
    if (current) {
      const dateOfSearch = new Date(current.last_updated);
      return (
        <div id="todayCard" className="card bg-white rounded-lg p-4 shadow-md">
          <div className="card-header flex justify-between px-4 text-gray-700">
            <span>{days[dateOfSearch.getDay()]}</span>
            <span>{dateOfSearch.getDate()} {monthNames[dateOfSearch.getMonth()]}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title text-xl font-bold">{location.name}</h5>
            <div className="degree flex items-center">
              <div className="num text-3xl font-bold px-2">{current.temp_c}<sup>o</sup>C</div>
              <div className="forecast-ico">
                <img src={`https:${current.condition.icon}`} alt="" width="90px" />
              </div>
            </div>
            <div className="custom text-primary mt-2">{current.condition.text}</div>
            <div className="current-info flex justify-between mt-4">
              <span><i className="fa-solid fa-umbrella mr-1"></i>20%</span>
              <span><i className="fa-solid fa-wind mr-1"></i>{current.gust_kph} Km/h</span>
              <span><i className="fa-regular fa-compass mr-1"></i>West</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const displayForecast = (forecast) => {
    return forecast.map((day, i) => {
      if (i === 0) return null;
      return (
        <div key={i} className="col-lg-6 p-0">
          <div className="text-center forecastCard">
            <div className="card w-full bg-white rounded-lg p-4 shadow-md">
              <div className="card-header flex justify-center px-4 text-gray-700">
                <span>{days[new Date(day.date).getDay()]}</span>
              </div>
              <div className="card-body flex flex-col items-center justify-center">
                <div className="degree">
                  <div className="forecast-ico">
                    <img src={`https:${day.day.condition.icon}`} alt="" />
                  </div>
                  <h1 className="text-2xl font-bold">{day.day.maxtemp_c}<sup>o</sup>C</h1>
                  <h4 className="text-muted text-lg">{day.day.mintemp_c}<sup>o</sup>C</h4>
                </div>
                <div className="custom text-primary mt-2">{day.day.condition.text}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <input
          type="text"
          value={term}
          onChange={handleInputChange}
          placeholder="Search for a city..."
          className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearchClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg">
        <p className="text-white text-3xl font-bold mb-4">Weather Forecast</p>
        {weather && (
          <>
            <div id="day" className="mb-8">
              {displayCurrent(weather.location, weather.current)}
            </div>
            <div id="next" className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {displayForecast(weather.forecast.forecastday)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
