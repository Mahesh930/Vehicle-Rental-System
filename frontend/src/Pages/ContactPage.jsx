import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Sales Team Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Sales Team</h3>
                <p>
                  Have questions about renting vehicles? Reach out to our Sales
                  Team for more information.
                </p>
                <a
                  href="mailto:sales@example.com"
                  className="text-blue-500 hover:underline"
                >
                  sales@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Support Team Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-green-500" />
              <div>
                <h3 className="text-xl font-semibold">Support Team</h3>
                <p>
                  Need help or have any issues with your rentals? Get in touch
                  with our Support Team.
                </p>
                <a
                  href="mailto:support@example.com"
                  className="text-green-500 hover:underline"
                >
                  support@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Number Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-3xl text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p>
                  We're here to assist you. Reach out to us during business
                  hours.
                </p>
                <a
                  href="tel:+91880077771"
                  className="text-red-500 hover:underline"
                >
                  +91 88007 77777
                </a>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-purple-500" />
              <div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p>
                  You can also visit us at our office during working hours.
                </p>
                <p className="text-purple-500">123 RentRip Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Optional) */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            Or Send Us a Message
          </h3>
          <form className="space-y-6">
            <div className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;