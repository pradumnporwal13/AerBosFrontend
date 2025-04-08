import React, { useState } from 'react';
import { Phone, Mail, MapPinned } from 'lucide-react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:pradumnporwal@gmail.com';
    setShowModal(false);
  };

  return (
    <div id="contact" className="py-20 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
      <iframe className='py-5 rounded-2xl w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14001.21372235041!2d77.18510193663816!3d28.68056857414852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8efeab59d1%3A0xc8b9b3e80502ab39!2sKamla%20Nagar%2C%20Delhi%2C%20110007!5e0!3m2!1sen!2sin!4v1744026074175!5m2!1sen!2sin"></iframe>
        {/* Info Section (Optional, keep if you want) */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          
          <div className="flex items-start p-3 border rounded-md border-green-600">
            <Phone className="h-6 w-6 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">T:011-45730287</p>
            </div>
          </div>
          <div className="flex items-start p-3 border rounded-md border-green-600">
            <Mail className="h-6 w-6 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">info@windpanel.in</p>
            </div>
          </div>
          <div className="flex items-start p-3 border rounded-md border-green-600">
            <MapPinned className="h-6 w-6 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regd. Office: D-137, Kamla Nagar, Malka Ganj, New Delhi – 110007
              </p>
            </div>
          </div>
          
        </div>
        {/* Trigger Button */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full md:w-[20%] mt-7 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Contact Us
        </button>
        
      </div>

      {/* Modal Form */}
      {showModal && (
        <div  className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div data-aos="zoom-in-up" className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 w-[90%] md:w-[40rem] relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl text-gray-400 hover:text-red-500"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <textarea
                rows="4"
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
