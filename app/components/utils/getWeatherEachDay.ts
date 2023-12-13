import { ForecastType } from "@/app/api/types";

 const getWeatherEachDay = (data: ForecastType[]) => {
    const entriesFor12PM = data.filter((entry) =>
      entry.dt_txt.endsWith("12:00:00")
    );

    const temperaturesForEachDay = entriesFor12PM.map((entry) => {
      const options = { day: "numeric", month: "long" } as const;
      const dateTime = new Date(entry.dt * 1000);
      const formattedDate = dateTime.toLocaleDateString("en-GB", options);

      return {
        date: formattedDate,
        temp: Math.round(entry.main.temp),
        humidity: entry.main.humidity,
        wind: entry.wind,
        icon: entry.weather[0].icon,
      };
    });

    return temperaturesForEachDay;
};

export default getWeatherEachDay