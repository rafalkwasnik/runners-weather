
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../api/fetchWeather';

export const useWeatherQuery = (city: string) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    staleTime: 60,
  });
}
