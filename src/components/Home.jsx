// src/components/Home.jsx
import React, { useState } from "react";
import background from "/images/IndiaGate.jpg";
import AirPollutionFactors from "./AirPollution";
import CityAirData from "./CityAirData";

import { Car } from "lucide-react";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div id="home" className="overflow-hidden">
      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white m-2 dark:bg-gray-900 p-6 rounded-xl shadow-xl max-w-md w-full">
            <div className="flex flex-row justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white ">
                Enter City to Check AQI
              </h2>
              <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
                className=" text-red-500 font-bold transition"
              >
                X
              </button>
            </div>
            <CityAirData />
            <h2 className="text-lg mt-3 text-gray-800 dark:text-white text-center ">
              Current location based AQI Data
            </h2>
            <iframe
              className="rounded-xl my-4 w-full h-72 "
              src="https://www.aqi.in/in/air-quality-map"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="relative h-screen bg-fixed bg-cover bg-center bg-no-repeat transition-colors duration-200 pt-14 md:pt-20"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-25 dark:bg-opacity-45 pointer-events-none w-full h-full"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl">
            <h1 className="text-2xl md:text-2xl lg:text-5xl font-light text-white mb-4 animate-fade-in-up">
              Breathe Clean, Live Green
            </h1>
            <h3 className="font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mb-2">
              AeroBos Environment Solutions Pvt. Ltd.
            </h3>
            <p className="text-sm  text-center text-gray-300 mb-6 max-w-xl animate-fade-in-up delay-200">
              Advanced air quality monitoring and filtration solutions for
              India. Take control of your environment with our cutting-edge
              technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-row justify-center gap-4 w-full overflow-x-auto whitespace-nowrap animate-fade-in-up delay-300 mb-6">
              <a
                href="#ViewSolution"
                className="bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transform hover:scale-95 transition duration-300 shadow-lg hover:shadow-xl text-center shrink-0"
              >
                View Solutions
              </a>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transform hover:scale-95 transition duration-300 shadow-lg hover:shadow-xl text-center shrink-0"
              >
                Check AQI Levels
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-green-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 animate-fade-in-up delay-500 w-full">
              <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                <Car className="h-10 w-10 text-green-600 dark:text-green-400 mb-2 md:mb-0 md:mr-4 animate-bounce" />
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white text-center">
                  Portable Air Filtration Technology
                </h2>
              </div>
              <h4 className="text-[12px] md:text-[17px] font-medium text-gray-800 dark:text-white text-center">
                "CREATING A SUSTAINABLE FUTURE FOR URBAN INDIA"
              </h4>
              <h4 className="text-sm font-medium text-green-800 text-center">
                A sustainable technology solution to address the air pollution
                crisis.
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-4 text-justify md:text-center">
                Our innovative rooftop filtration systems transform every
                vehicle into a mobile air purification unit. As you drive, our
                system actively filters PM particles, contributing to cleaner
                air across the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
