"use client";

import React from "react";
import Image from "next/image";

import { CurrentWeatherProps } from "./types";
import useWeatherQuery from "@/app/hooks/useWeatherQuery";

const Weather = ({ city }: CurrentWeatherProps) => {
  const { data, error, isLoading } = useWeatherQuery(city);

  if (error) <h2> {error.message} </h2>;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (data)
    return (
      <>
        <ul className="mb-8">
          <li className="mb-2">
            <Image
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              width={64}
              height={64}
              alt="weather condition"
            />
          </li>
          <li>status: {data.weather[0].description}</li>
          <li>temperature: {Math.round(data.main.temp)} C</li>
          <li>humidity: {data.main.humidity}</li>
        </ul>
      </>
    );
};

export default Weather;
