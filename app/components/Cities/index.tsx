"use client";

import React, { useEffect, useState } from "react";

import { defaultCities } from "./const";

import CitiesList from "../CitiesList";
import AddCity from "../AddCity";

import { getStorageData } from "../utils/getStorageData";

const Cities = () => {
  const [cities, setCities] = useState(defaultCities);
  const [addedCities, setAddedCities] = useState<string[]>();

  const handleAddCities = (added: string[]) => {
    setAddedCities(added);
  };

  useEffect(() => {
    const userCities = getStorageData("userRunningCity") || [];

    if (userCities) setCities([...defaultCities, ...userCities]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addedCities) setCities([...cities, ...addedCities]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedCities]);

  return (
    <>
      <CitiesList cities={cities} />
      <AddCity handleAddCities={handleAddCities} />
    </>
  );
};

export default Cities;
