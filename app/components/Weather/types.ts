import { ResponseWeatherType } from "@/app/types";

export type CurrentWeatherProps = {
    weather: ResponseWeatherType;
    city: string;
};
  