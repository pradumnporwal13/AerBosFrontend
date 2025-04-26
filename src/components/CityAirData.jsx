import React, { useState } from "react";

const getAQIDescription = (aqi) => {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy for Sensitive Groups";
  if (aqi <= 200) return "Unhealthy";
  if (aqi <= 300) return "Very Unhealthy";
  return "Hazardous";
};

const CityAirData = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCityData = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      // Step 1: Get Latitude and Longitude
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json`);
      const geoData = await geoRes.json();

      if (!geoData || geoData.length === 0) {
        throw new Error("City not found.");
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;
      const apikey = "f2ccc450ce007b4d14971ca160ac5a2015497363";

      // Step 2: Get AQI Data based on lat/lon
      const aqiRes = await fetch(
        `https://api.waqi.info/feed/geo:${lat};${lon}/?token=${apikey}`
      );
      const aqiData = await aqiRes.json();

      if (aqiData.status !== "ok") {
        throw new Error("AQI data not available.");
      }

      const result = {
        AQI: aqiData.data.aqi,
        PM25: aqiData.data.iaqi?.pm25?.v,
        PM10: aqiData.data.iaqi?.pm10?.v,
        quality: getAQIDescription(aqiData.data.aqi),
      };

      setData(result);
    } catch (err) {
      console.error(err);
      setError("Currently No data available of you city. In future we will Gather data of your city, please try again later ! ");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") fetchCityData(city);
  };

  return (
    <div className="p-4 max-w-lg mx-auto text-center bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Enter City to Check AQI</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Get AQI
        </button>
      </form>

      {loading && <p className="text-blue-500">Loading...</p>}
      

      {data && (
        <div className="text-left space-y-2  text-gray-800 dark:text-white">
          <p><strong className=" text-yellow-400">AQI:</strong> {data.AQI} ({data.quality})</p>
          <p><strong className=" text-yellow-400">PM2.5:</strong> {data.PM25 ?? "N/A"}</p>
          <p><strong className=" text-yellow-400">PM10:</strong> {data.PM10 ?? "N/A"}</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CityAirData;


