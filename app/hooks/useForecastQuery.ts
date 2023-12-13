
import { useQuery } from '@tanstack/react-query';
import { fetchForecast } from '../api/fetchForecast';

const useForecastQuery = (city: string) => {
  return useQuery({
    queryKey: ["forecast", city],
    queryFn: () => fetchForecast(city),
    staleTime: 60,
  });
}

export default useForecastQuery
