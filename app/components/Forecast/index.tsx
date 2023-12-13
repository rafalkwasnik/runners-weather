import React from "react";
import Image from "next/image";

import { getWeatherEachDay } from "../utils/getWeatherEachDay";
import { fetchForecast } from "../../api/fetchForecast";
import { ForecastProps } from "./types";

const Forecast = async ({ city }: ForecastProps) => {
  const forecast = await fetchForecast(city);
  const weather = getWeatherEachDay(forecast.days);

  return (
    <>
      <h2 className="text-md mb-4">next five days...</h2>
      <div className="flex flex-col md:flex-row justify-between max-w-5xl">
        {weather?.map((day) => (
          <div key={day.humidity} className="flex flex-col">
            <span className="text-md mb-2 mt-4 sm:mt-0">{day.date}</span>
            <span className="mb-2 bg-white p-2">
              <Image
                src={`http://openweathermap.org/img/w/${day.icon}.png`}
                width={32}
                height={32}
                alt="weather condition"
              />
            </span>
            <span className="text-sm">temp: {day.temp} C</span>
            <span className="text-sm">humidity: {day.humidity} %</span>
            <span className="text-sm">wind: {day.wind.speed} meter/sec</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
