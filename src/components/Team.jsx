import React from "react";
import { Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Gangesh Singhal",
    designation: "Founder & CEO",
    image: "/images/Gangesh Singhal.jpg",
    linkedin: "https://www.linkedin.com/in/gangesh2407/",
    instagram: "#",
  },
  {
    name: "Akshansh Yadav",
    designation: "Co-Founder & CTO",
    image: "/images/Akshansh  Yadav.jpg",
    linkedin: "#",
    instagram: "#",
  },
];

const Team = () => {
  return (
    <section className="py-12 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-xl font-light text-center text-black dark:text-gray-400 mb-10">
          Meet Our Team
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="transition hover:scale-95 duration-150 w-full bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800  rounded-3xl shadow-md shadow-gray-300/50 dark:shadow-black/30 p-6 flex flex-col items-center text-center "
            >
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500 dark:border-green-400 transition hover:scale-105 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Designation */}
              <h3 className="text-lg font-light mt-4">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                {member.designation}
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-600"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
