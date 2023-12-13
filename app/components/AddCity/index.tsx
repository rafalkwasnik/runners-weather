"use client";

import React, { useEffect, useState } from "react";

import { defaultCities } from "../Cities/const";
import { useGetLocation } from "@/app/hooks/useGetLocation";
import { getStorageData } from "../Cities/utils";

type AddCityProps = {
  handleAddedCities: (added: string[]) => void;
};

const AddCity = ({ handleAddedCities }: AddCityProps) => {
  const [userCityName, setUserCityName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { city, handleCityName } = useGetLocation();

  const handleStorageCity = (key: string) => {
    let added: string[] = [];
    const stored = getStorageData(key) || [];

    if (userCityName != "")
      if (!defaultCities.includes(userCityName)) {
        if (stored && !stored.length) {
          localStorage.setItem(key, JSON.stringify([userCityName]));
          added = [userCityName];
        } else {
          if (stored && stored.includes(userCityName)) {
            setErrorMessage("tou're already running in this city!!");
            return;
          }

          localStorage.setItem(key, JSON.stringify([...stored, userCityName]));
          added = [userCityName];
        }
      } else {
        setErrorMessage("tou're already running in this city");
      }
    else setErrorMessage("type name your city");

    handleAddedCities(added);
  };

  useEffect(() => {
    setUserCityName(city);
  }, [city]);

  return (
    <>
      <div className="mt-12">
        <div className="flex flex-col">
          <p className="mb-2 text-md">you also can add your running city:</p>
          <div className="flex flex-row">
            <input
              id="city"
              type="text"
              name="addCity"
              placeholder="type city name"
              value={userCityName}
              onChange={(e) => setUserCityName(e.target.value)}
              className="p-2 text-sm text-gray-700 border-0 w-100 md:w-1/5"
            />
            <button
              onClick={() => handleStorageCity("userRunningCity")}
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
            className="bg-gray-300 hover:bg-black hover:text-gray-300 text-black text-xs mt-8 pt-2 pb-2 pl-6 pr-6 w-1/1 md:w-1/5"
          >
            get from your localisation
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCity;
