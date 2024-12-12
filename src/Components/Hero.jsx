import React from 'react'

const Hero = () => {
  return (
    <div className="bg-white_1 overflow-hidden w-full">
      <div className="mx-auto px-8 py-0 lg:py-12 w-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-green_3 font-rambla mb-4">
              <span className="block">Join us for fun and</span>
              <span className="block text-green_2">engaging language learning</span>
            </h1>
            <p className="text-xl text-green_3 font-poppins mb-4">
              —log in or book now
            </p>
            <p className="text-xl text-green_3 font-poppins mb-8">
              By Boo Learning
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white_1 bg-green_2 hover:bg-green_3 md:text-lg font-poppins"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="flex justify-end lg:w-1/2 mt-8 lg:mt-0">
            <img
              className="w-full max-w-lg h-auto object-cover "
              src="/Hero.png"
              alt="Student learning language"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

