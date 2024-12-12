import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green_3 mb-6 font-rambla">Contact Us</h1>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-lg text-green_3 mb-4 font-poppins">We'd love to hear from you! Please fill out the form or use our contact information.</p>
          <div className="flex flex-col space-y-4">
            <p className="flex items-center text-green_3 font-poppins">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@boolearning.com
            </p>
            <p className="flex items-center text-green_3 font-poppins">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (123) 456-7890
            </p>
            <p className="flex items-center text-green_3 font-poppins">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              123 Language Street, Learningville, ED 12345
            </p>
          </div>
        </div>
        <form className="flex flex-col space-y-4 w-full md:w-1/2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-green_3 mb-1 font-pragatiNarrow">Name</label>
            <input type="text" id="name" name="name" className="px-3 py-2 border border-green_1 rounded-md focus:outline-none focus:ring-2 focus:ring-green_2" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-green_3 mb-1 font-pragatiNarrow">Email</label>
            <input type="email" id="email" name="email" className="px-3 py-2 border border-green_1 rounded-md focus:outline-none focus:ring-2 focus:ring-green_2" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-green_3 mb-1 font-pragatiNarrow">Message</label>
            <textarea id="message" name="message" rows="4" className="px-3 py-2 border border-green_1 rounded-md focus:outline-none focus:ring-2 focus:ring-green_2" required></textarea>
          </div>
          <button type="submit" className="bg-green_2 text-white_1 px-6 py-2 rounded-md hover:bg-green_3 transition-colors font-poppins">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

