import React from 'react'
import Team from './Team'
import Partners from './Partners'

function AboutUs() {
  return (
    <div id='aboutus'>
      <hr />
    <div className="pt-4 pb-2 mx-auto px-6 md:px-12 lg:px-16 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col text-wrap ">
        <h1 className="font-semibold my-2  mx-auto text-2xl md:text-3xl">About Us</h1>
        <p className="w-full mx-auto text-sm md:text-base text-justify  text-gray-600 dark:text-gray-300">
          We are a team committed to solve the challenge as big as air pollution
          with technology. We thoroughly learned the various solutions adopted
          across the world and their results. We are determined to fill the gaps
          and launch a solution that is not only just feasible but also
          sustainable. In addition to designing and deploying best performing
          product for delivering fresh air, we believe in creating a business
          model around it that will enable us scale this solution.
        </p>
      </div>
      
      <div className='py-4 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col text-wrap px-8'>
        {/* <h1 className="font-semibold my-2 max-w-2xl mx-auto text-lg md:text-xl">Meet Our Team</h1> */}
        <Team/>
      </div>
      
      <Partners/>

      <hr />
     
      </div>
  )
}

export default AboutUs