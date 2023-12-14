import React from "react";

import Weather from "../../components/Weather";
import Forecast from "../../components/Forecast";
import PreviousPage from "../../components/PreviousPage";
import CopyUrl from "../../components/CopyUrl";

import { CityPageProps } from "./types";

const CityPage = async (searchParams: CityPageProps) => {
  const pathName = searchParams.params.name;
  const city = decodeURIComponent(pathName);

  return (
    <>
      <main className="flex flex-col justify-between">
        <h1 className="text-3xl mb-4">{city}</h1>
        <Weather city={city} />
        <Forecast city={city} />
      </main>
      <footer className="flex flex-row justify-between">
        <PreviousPage />
        <CopyUrl />
      </footer>
    </>
  );
};

export default CityPage;
