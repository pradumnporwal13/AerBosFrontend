import React from "react";

const partners = [
  { name: "IIM Ahmedabad", logo: "/images/IIM_A.jpg" },
  { name: "IIM Indore", logo: "/images/IIM_Indore.jpg" },
  { name: "IIT Kanpur", logo: "/images/IIT_K.jpg" },
  { name: "IIT Roorkee", logo: "/images/IIT_R.svg" },
  { name: "Department Of Science & Technology", logo: "/images/DepartmentOfScienceAndTechnology.png" },
  { name: "Ministry Of Electronics & Information Technolgy", logo: "/images/Ministry_of_Electronics_and_Information_Technology.svg" },
];

const Partners = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-light text-center text-black dark:text-gray-400 mb-6">
          Our Learning & Incubation Partners
        </h2>

        {/* Infinite Scrolling Wrapper */}
        <div className="relative overflow-hidden w-full">
          <div className="flex space-x-6 animate-scroll px-14">
            {/* Duplicate Items to Create a Circular Loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="h-40 w-24 border bg-white shadow-md rounded-xl p-4 flex flex-col items-center min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
                <img src={partner.logo} alt={partner.name} className="h-16 w-16 object-contain mb-2"/>
                <p className="text-sm text-wrap text-gray-700  font-semibold">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Animation Styling */}
      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }

          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: infiniteScroll 20s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
