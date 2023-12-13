"use client";

import React, { useEffect, useState } from "react";

import { useFetchLocation } from "../../hooks/useFetchLocation";
import { handleStorageCity } from "../utils/handleStorageCity";

import { AddCityProps } from "./types";

const AddCity = ({ handleAddCities }: AddCityProps) => {
  const [userCity, setUserCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { city, handleCityName } = useFetchLocation();

  const handleSetErrors = (message: string) => {
    setErrorMessage(message);
  };

  const handleClearInput = () => {
    setUserCity("");
  };

  useEffect(() => {
    setUserCity(city);
  }, [city]);

  return (
    <div className="mt-12">
      <div className="flex flex-col">
        <p className="mb-2 text-md">you also can add your running city:</p>
        <div className="flex flex-row">
          <input
            id="city"
            type="text"
            name="addCity"
            placeholder="type city name"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
            className="p-2 text-sm text-gray-700 border-0 w-full md:w-1/5"
          />
          <button
            onClick={() =>
              handleStorageCity({
                userCity,
                handleAddCities,
                handleSetErrors,
                handleClearInput,
              })
            }
            className="bg-orange-600 hover:bg-blue-950 text-white-0 pt-2 pb-2 pl-6 pr-6"
          >
            Add
          </button>
        </div>
        {errorMessage && (
          <span className="text-xs mt-2 text-red-500">{errorMessage}</span>
        )}

        <button
          onClick={() => handleCityName()}
          className="bg-gray-300 hover:bg-black hover:text-gray-300 text-black text-xs mt-8 pt-2 pb-2 pl-6 pr-6 w-full md:w-1/5"
        >
          get from your localisation
        </button>
      </div>
    </div>
  );
};

export default AddCity;
