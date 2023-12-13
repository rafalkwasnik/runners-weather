"use client";

import React, { useEffect, useState } from "react";

import { defaultCities } from "./const";

import CitiesList from "../CitiesList";
import AddCity from "../AddCity";

import { getStorageData } from "./utils";

const Cities = () => {
  const [cities, setCities] = useState<string[]>(defaultCities);
  const [addedCity, setAddedCity] = useState<string[]>();

  const handleAddedCities = (added: string[]) => {
    setAddedCity(added);
  };

  useEffect(() => {
    const userCity = getStorageData("userRunningCity") || [];

    if (userCity) setCities([...defaultCities, ...userCity]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addedCity) setCities([...cities, ...addedCity]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedCity]);

  return (
    <>
      <CitiesList cities={cities} />
      <AddCity handleAddedCities={handleAddedCities} />
    </>
  );
};

export default Cities;
