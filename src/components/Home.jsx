// src/components/Home.jsx
import React, { useState } from "react";
import background from "/images/IndiaGate.jpg";
import AirPollutionFactors from "./AirPollution";
import { Car } from "lucide-react";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="home" className="overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-fixed bg-cover bg-center bg-no-repeat transition-colors duration-200 pt-14 md:pt-20"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-25 dark:bg-opacity-45 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl">
            <h1
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="text-2xl md:text-2xl lg:text-5xl font-light text-white mb-4 animate-fade-in-up"
            >
              Breathe Clean, Live Green
            </h1>
            <h3
              data-aos="zoom-out"
              className="font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mb-2"
            >
              AeroBos Environment Solutions Pvt. Ltd.
            </h3>
            <p
              data-aos="zoom-out"
              className="text-sm md:text-base text-gray-300 mb-6 max-w-xl animate-fade-in-up delay-200"
            >
              Advanced air quality monitoring and filtration solutions for
              India. Take control of your environment with our cutting-edge
              technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-row justify-center gap-4 w-full flex-wrap animate-fade-in-up delay-300 mb-6">
              <a
                href="#ViewSolution"
                className="bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transform hover:scale-95 transition duration-300 shadow-lg hover:shadow-xl text-center"
              >
                View Solutions
              </a>
              <a
                href="#CheckAQI"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transform hover:scale-95 transition duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Check AQI Levels
              </a>
            </div>

            {/* Info Box */}
            <div
              data-aos="zoom-out"
              className="bg-green-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 animate-fade-in-up delay-500 w-full"
            >
              <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                <Car className="h-10 w-10 text-green-600 dark:text-green-400 mb-2 md:mb-0 md:mr-4 animate-bounce" />
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white text-center">
                  Portable Air Filtration Technology
                </h2>
              </div>
              <h4 className="text-sm md:text-xl font-medium text-gray-800 dark:text-white text-center">
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

      {/* ViewSolution Section */}
      <div
        id="ViewSolution"
        className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-2 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        {/* Left - Description */}
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left"
        >
          <h1 className="text-2xl md:text-3xl text-left font-bold text-gray-800 dark:text-white">
            AeroBos Air Filtration System Mounted on Vehicle Roof
          </h1>
          <p className="text-justify text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl">
            Our advanced rooftop filtration technology ensures cleaner air while
            you drive. Experience innovation that actively reduces pollution
            with real-time air monitoring. <br />
            Energy is produced by both solar film and the wind turbine mounted
            on the vehicular rooftop.
          </p>
          {/* Conditionally Visible Content */}
          {showMore && (
            <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm md:text-base transition-all duration-500 ease-in-out">
              <p data-aos="" className="text-justify">
                AeriBos advanced air filtration system operates while the vehicle is in
                motion, effectively filtering out the most hazardous particulate matter (PM)
                from the air. These PM particles often linger in the environment and are
                known to cause severe health issues such as lung infections, breathing
                difficulties, cardiovascular problems, and more. In addition, our system can
                also detect major gases that contribute significantly to air pollution,
                ensuring a healthier and safer environment.
              </p>
            </div>
          )}
          
          {/* See More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full md:w-36 bg-green-600 dark:bg-green-500 text-white px-6 py-3 my-6 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
        

        {/* Right - 3D Model */}
        <div
          data-aos="fade-left"
          className="w-full md:w-1/2 h-[300px] md:h-[500px] flex justify-center items-center"
        >
          <model-viewer
            alt="Air Filtration System Model"
            autoplay
            disable-zoom
            src="/models/Luxurious_Tour_Bus_0330183705_texture.glb"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            auto-rotate
            ar
            className="w-full h-full"
          ></model-viewer>
        </div>
      </div>
    </div>
  );
};

export default Home;

