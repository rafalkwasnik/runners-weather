import React from "react";
import Link from "next/link";

import { CitiesListProps } from "./types";

const CitiesList = ({ cities }: CitiesListProps) => {
  return (
    <>
      {cities.map((name) => (
        <div key={name} className="text-xl">
          <Link href={`/city/${name}`}>{name}</Link>
        </div>
      ))}
    </>
  );
};

export default CitiesList;
