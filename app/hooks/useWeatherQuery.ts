
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../api/fetchWeather';

const useWeatherQuery = (city: string) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    staleTime: 60,
  });
}

export default useWeatherQuery
