import { ResponseWeatherType } from "./types";

const APIkey = "438bf8d86411f569e45e432c2fdb2fb7"; 

export const fetchWeather = async (name: string): Promise<ResponseWeatherType> => {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIkey}&units=metric`, { next: { revalidate: 300 }, cache: 'force-cache' });
    const weather = await data.json();

    return weather;
  } catch (error) {
    throw error; 
  }
};