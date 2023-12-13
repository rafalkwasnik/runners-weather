"use client";

import React from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "@/app/api/fetchWeather";

import { CurrentWeatherProps } from "./types";

const Weather = ({ weather, city }: CurrentWeatherProps) => {
  const { data, error } = useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather(city),
    initialData: weather,
  });

  if (error) <h2> error.message </h2>;

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
