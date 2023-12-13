"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { DayWeatherType, ForecastProps } from "./types";
import { ForecastType } from "@/app/types";

import useForecastQuery from "@/app/hooks/useForecastQuery";

const Forecast = ({ city }: ForecastProps) => {
  const [weather, setWeather] = useState<DayWeatherType[]>();

  const { data, error, isLoading } = useForecastQuery(city);

  const getWeatherForAllDays = (data: ForecastType[]) => {
    const entriesFor12PM = data.filter((entry) =>
      entry.dt_txt.endsWith("12:00:00")
    );

    const temperaturesForEachDay = entriesFor12PM.map((entry) => {
      const options = { day: "numeric", month: "long" } as const;
      const dateTime = new Date(entry.dt * 1000);
      const formattedDate = dateTime.toLocaleDateString("en-GB", options);

      return {
        date: formattedDate,
        temp: Math.round(entry.main.temp),
        humidity: entry.main.humidity,
        icon: entry.weather[0].icon,
      };
    });

    return temperaturesForEachDay;
  };

  useEffect(() => {
    if (data) {
      setWeather(getWeatherForAllDays(data.days));
    }
  }, [data]);

  if (error) <h2> {error.message} </h2>;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2 className="text-md mb-4">next five days...</h2>
      <div className="flex flex-col md:flex-row justify-between max-w-3xl">
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
              <span className="text-sm">humidity: {day.humidity}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default Forecast;
