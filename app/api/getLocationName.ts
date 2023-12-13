const APIkey = "dd5d51f75d5c46e7a804294e06bcaa98";

export const getLocationName = (latitude: number, longitude: number) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          return data.results[0].components.city
        } else {
          return "Reverse geolocation request failed.";
        }
      })
      .catch((error) => console.error(error));
};

