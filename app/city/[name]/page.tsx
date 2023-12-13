import React from "react";

import Weather from "@/app/components/Weather";
import Forecast from "@/app/components/Forecast";
import PreviousPage from "@/app/components/PreviousPage";
import CopyUrl from "@/app/components/CopyUrl";

import { CityPageProps } from "./types";

const CityPage = async (searchParams: CityPageProps) => {
  const city = searchParams.params.name;

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
