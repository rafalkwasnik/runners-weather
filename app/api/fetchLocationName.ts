type coordsType = {
  latitude: number;
  longitude: number;
};

const APIkey = "dd5d51f75d5c46e7a804294e06bcaa98";

// export const fetchLocationName = async (coordinates: coordsType) => {
//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude},${coordinates.longitude}&key=${APIkey}`;
//   const res = await fetch(url);
//   const location = await res.json();
//   const name = location.results[0].components.city;

//   return name;
// };

export const fetchLocationName = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const data = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`);

    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${data.status}`);
    }

    const location = await data.json();
    const name = location.results[0].components.city;

    return name;
  } catch (error) {
    throw error; 
  }
};
