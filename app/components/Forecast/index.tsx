"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import getWeatherEachDay from "../utils/getWeatherEachDay";
import { useForecastQuery } from "../../hooks/useForecastQuery";

import { DayWeatherType, ForecastProps } from "./types";

const Forecast = ({ city }: ForecastProps) => {
  const [weather, setWeather] = useState<DayWeatherType[]>();
  const { data, error, isLoading } = useForecastQuery(city);

  useEffect(() => {
    if (data) {
      setWeather(getWeatherEachDay(data.days));
    }
  }, [data]);

  if (error) <h2> {error.message} </h2>;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2 className="text-md mb-4">next five days...</h2>
      <div className="flex flex-col md:flex-row justify-between max-w-5xl">
        {weather &&
          weather.map((day) => (
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
