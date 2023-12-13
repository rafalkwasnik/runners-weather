import { useState } from "react";
import { fetchLocationName } from "../api/fetchLocationName";

export const useFetchLocation = () => {
  const [city, setCity] = useState<string>('')

  const handleCityName = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords
          const nearestCity = await fetchLocationName(latitude, longitude)

          setCity(nearestCity)
        },
        error => {
          console.error(error.message);
        }
      );
    } else {
      console.error("Location not supported");
    }
  }

  return { city, handleCityName }
};