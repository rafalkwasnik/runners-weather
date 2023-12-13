import { ResponseForecastType } from "@/app/types/types";

export type ForecastProps = {
    forecast: ResponseForecastType;
    city: string;
};
  
export type DayWeatherType = {
    date: string;
    humidity: number;
    temp: number;
    icon: string;
};