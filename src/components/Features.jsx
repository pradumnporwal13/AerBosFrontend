import React from 'react';
import { MapPin, Camera, Filter, Car, Sun, SquareActivity, Wind } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "GPS Tracking",
      description: "Real-time location tracking and mapping of air quality data across all over the World"
    },
    {
      icon: <Filter className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "PM Filtration",
      description: "Advanced particulate matter filtration system removing up to 99.9% of harmful particles"
    },
    {
      icon: <SquareActivity className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Real Time Monitoring of Dust",
      description: "Real-time Display of PM1.0, PM2.5, PM10"
    },
    {
      icon: <Car className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Mobile Purification",
      description: "Rooftop-mounted system that filters air while your vehicle is in motion"
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Overhead Camera",
      description: "4GB high-capacity recording system for continuous environmental monitoring"
    },
    {
      icon: <Sun className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Solar Energy Generation",
      description: "Some of our premium products also have a renewable energy generation system mounted on the vehicle roof"
    },
    {
      icon: <Wind className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Wind Energy Generation",
      description: "Some of our premium products also have a renewable energy generation system mounted on the vehicle roof"
    }
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white animate-fade-in-up">
            Advanced Features of Our Product
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Our integrated solution combines cutting-edge technology to provide comprehensive
            environmental monitoring and protection.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 group-hover:animate-bounce">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
