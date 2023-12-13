import React from "react";
import Image from "next/image";

import { fetchWeather } from "../../api/fetchWeather";

import { CurrentWeatherProps } from "./types";

const Weather = async ({ city }: CurrentWeatherProps) => {
  const weather = await fetchWeather(city);

  return (
    <>
      <ul className="mb-8">
        <li className="mb-2">
          <Image
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            width={64}
            height={64}
            alt="weather condition"
          />
        </li>
        <li>status: {weather.weather[0].description}</li>
        <li>temperature: {Math.round(weather.main.temp)} C</li>
        <li>humidity: {weather.main.humidity} %</li>
      </ul>
    </>
  );
};

export default Weather;
