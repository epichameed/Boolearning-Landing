import React from "react";

const Contact = () => {
  return (
    <div className="bg-white_1 min-h-screen">
      {/* Contact Info Section */}
      <div className="bg-green_1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green_3 text-center mb-16 font-rambla">
            Contact Us & Get in Touch
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
            {/* Head Office */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green_3 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green_3 mb-2">
                Head Office
              </h3>
              <p className="text-gray-600">Montreal, Canada</p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green_3 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green_3 mb-2">Email</h3>
              <p className="text-gray-600">Lpremipsum@gmail.com</p>
            </div>
            {/* Working Hours */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green_3 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green_3 mb-2">
                Working Hours
              </h3>
              <p className="text-gray-600">9:00pm-5:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white_1">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Form */}
            <div className="w-full lg:w-1/2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green_3"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green_3"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject..."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green_3"
                />
                <select
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green_3 bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Course Selection
                  </option>
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                  <option value="german">German</option>
                </select>
                <textarea
                  placeholder="Your Message..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green_3"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green_3 text-white py-3 rounded-md hover:bg-green_2 transition-colors font-medium"
                >
                  Send Message Now
                </button>
              </form>
            </div>
            {/* Illustration */}
            <div className="w-full justify-end lg:w-1/2">
              <img
                src="/contact.png"
                alt="Contact illustration"
                className="w-full max-w-md ml-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178787.75907781904!2d-73.87204678359373!3d45.55748845010504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sus!4v1652892735975!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
