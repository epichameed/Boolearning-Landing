import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link to="/" className="text-black_1 hover:text-green_2 font-bold font-poppins">Home</Link>
      <Link to="/app/demo" className="text-black_1 hover:text-green_2 font-bold  font-poppins">Demo</Link>
      <Link to="/app/plans" className="text-black_1 hover:text-green_2 font-bold font-poppins">Plans</Link>
      <Link to="/app/booking" className="text-black_1 hover:text-green_2 font-bold font-poppins">Booking</Link>
      <Link to="/app/faqs" className="text-black_1 hover:text-green_2 font-bold font-poppins">FAQs</Link>
      <Link to="/app/about" className="text-black_1 hover:text-green_2 font-bold  font-poppins">About</Link>
      <Link to="/app/contact" className="text-black_1 hover:text-green_2 font-bold font-poppins">Contact</Link>
      <Link to="/login" className="text-black_1 hover:text-green_2 font-bold font-poppins">Login</Link>
      <button className="bg-green_2 text-white_1 px-4 py-2 rounded-md hover:bg-green_3 font-bold transition-colors font-poppins">
        Language
      </button>
    </nav>
  )
}

export default Navigation

