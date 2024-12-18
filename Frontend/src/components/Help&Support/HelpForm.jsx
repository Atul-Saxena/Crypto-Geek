import React from 'react'
import { useState } from 'react'
import { BackgroundBeams } from "../UI/Background-beams";

const HelpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
      };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 md:p-24 z-10">
          <div className="w-screen max-w-md sm:mt-24 md:mt-0 bg-gray-900 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-8 z-20 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center md:text-3xl">Help & Support</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 sm:w-screen md:w-full">
              
              {/* Name Field */}
              <div className="sm:flex sm:flex-col sm:justify-between">
                <label className="block text-white font-medium mb-2 sm:mb-0" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
    
              {/* Email Field */}
              <div className="sm:flex sm:flex-col sm:justify-between">
                <label className="block text-white font-medium mb-2 sm:mb-0" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </div>
    
              {/* Subject Field */}
              <div className="sm:flex sm:flex-col sm:justify-between">
                <label className="block text-white font-medium mb-2 sm:mb-0" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Subject"
                />
              </div>
    
              {/* Message Field */}
              <div className="sm:flex sm:flex-col sm:justify-between">
                <label className="block text-white font-medium mb-2 sm:mb-0" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
    
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              >
                Submit
              </button>
            </form>
          </div>
          <BackgroundBeams />
        </div>
      );
    };
    

export default HelpForm