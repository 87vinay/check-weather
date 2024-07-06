import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather/?q=${search}&units=metric&appid=1d34c0b11dea5cfe3cf823ca9da02770`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputdata">
          <input
            type="search"
            placeholder="search city.."
            className="inputfeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errormsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i class="fa-solid fa-cloud"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°cel </h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°cel | Max: {city.temp_max}°cel
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;
