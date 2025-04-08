import React from "react";

const pollutionFactors = [
  { id: "01", label: "PM1.0" },
  { id: "02", label: "PM2.5" },
  { id: "03", label: "PM10" },
  { id: "04", label: "HVOC" },
  { id: "05", label: "eCO2" },
  { id: "06", label: "NOx" },
  { id: "07", label: "SOx" },
  { id: "08", label: "CFCs" },
];

const AirPollutionFactors = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-5 px-6 flex flex-col gap-8">
      <p className="text-justify dark:text-white"></p>
      <h1 className="text-center dark:text-white">Major Constituents of Air Pollution</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-3 lg:grid-cols-8 gap-8 text-center">
        {pollutionFactors.map((factor) => (
          <div data-aos="fade-up"
          data-aos-anchor-placement="top-center" key={factor.id} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-semibold text-gray-400">{factor.id}.</span>
            <span className="text-lg text-gray-600 dark:text-gray-300 mt-2">{factor.label}</span>
            <div className="w-full border-t-2 border-gray-600 mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirPollutionFactors;