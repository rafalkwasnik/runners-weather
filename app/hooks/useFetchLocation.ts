import { useState } from "react";
import { fetchLocationName } from "../api/fetchLocationName";

export const useFetchLocation = () => {
  const [city, setCity] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const handleCityName = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords
          const nearestCity = await fetchLocationName(latitude, longitude)

          setCity(nearestCity)
          setIsLoading(false)
        },
        error => {
          setIsError(error.message.toLocaleLowerCase());
        }
      );
    } else {
      setIsError("location not supported");
    }
  }

  return { city, isLoading, isError, handleCityName }
};