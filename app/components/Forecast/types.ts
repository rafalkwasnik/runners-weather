import { Wind } from "@/app/api/types";

export type ForecastProps = {
    city: string;
};
  
export type DayWeatherType = {
    date: string;
    humidity: number;
    temp: number;
    wind: Wind
    icon: string;
};