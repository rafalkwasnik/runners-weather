import { getStorageData } from "../utils/getStorageData";
import { defaultCities } from "../Cities/const";
import { handleStorageCityProps } from "./types";

const KEY = "userRunningCity";

export const handleStorageCity = ({userCity, handleAddedCities, handleSetErrors, handleClearInput}: handleStorageCityProps) => {
    let added: string[] = [];
    const stored = getStorageData(KEY) || [];

    if (userCity != "")
      if (!defaultCities.includes(userCity)) {
        if (stored && !stored.length) {
          localStorage.setItem(KEY, JSON.stringify([userCity]));
          added = [userCity];

          handleClearInput();
        } else {
          if (stored && stored.includes(userCity)) {
            handleSetErrors("tou're already running in this city!!");
            return;
          }

          localStorage.setItem(KEY, JSON.stringify([...stored, userCity]));
          added = [userCity];

          handleSetErrors("");
          handleClearInput();
        }
      } else {
        handleSetErrors("you're already running in this city");
      }
      else handleSetErrors("type userCity your city");

    handleAddedCities(added);
  };