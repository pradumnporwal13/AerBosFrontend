import React, { useState } from "react";

function Info() {
  const [showMore, setShowMore] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  return (
    <>
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
            <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base transition-all duration-500 ease-in-out">
              <p className="text-justify">
                AeroBos advanced air filtration system operates while the
                vehicle is in motion, effectively filtering out the most
                hazardous particulate matter (PM) from the air...
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-row justify-start gap-5">
            <button
              onClick={() => setShowMore(!showMore)}
              className="w-full md:w-36 bg-green-600 dark:bg-green-500 text-white px-6 py-3 my-6 rounded-md hover:bg-green-700 dark:hover:bg-green-600 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
            >
              {showMore ? "See Less" : "See More"}
            </button>

            <button
              onClick={() => setShowPopup(true)} // 👈 Show Popup
              className="w-full md:w-36 bg-yellow-400 dark:bg-yellow-400 text-white px-6 py-3 my-6 rounded-md hover:bg-yellow-700 dark:hover:bg-yellow-700 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Illustration
            </button>
          </div>
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
            src="/models/sample01.glb"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            auto-rotate
            ar
            className="w-full h-full"
          ></model-viewer>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white m-4 dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-red-700 dark:text-red-700"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white">Concept Model</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              {/* Replace below with your image links */}
              <img src="/images/concept model render.jpg" alt="Model 1" className="rounded-md h-60 w-80" />
              <img src="/images/ConceptModel.jpg" alt="Model 2" className="rounded-md h-60 w-80 border border-black" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Info;

