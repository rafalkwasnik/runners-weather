import { ResponseForecastType } from "../types";

const APIkey = "438bf8d86411f569e45e432c2fdb2fb7";

export const fetchForecast = async (name: string): Promise<ResponseForecastType> => {
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${APIkey}&units=metric`, { next: { revalidate: 300 }, cache: 'force-cache' });
    const { list } = await data.json();
  
    return { days: list };
  } catch (error) {
    throw error; 
  }
};