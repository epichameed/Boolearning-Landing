import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white_1 z-50 flex flex-col">
      <div className="container mx-auto px-4 py-6 flex flex-col flex-grow">
        <div className="flex justify-end">
          <button className="text-green_3" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-8">
          <Link to="/" className="text-green_3 hover:text-green_2 text-lg font-pragatiNarrow">Home</Link>
          <Link to="/demo" className="text-green_3 hover:text-green_2 text-lg font-pragatiNarrow">Demo</Link>
          <Link to="/faqs" className="text-green_3 hover:text-green_2 text-lg font-pragatiNarrow">FAQs</Link>
          <Link to="/plans" className="text-green_3 hover:text-green_2 text-lg font-pragatiNarrow">Plans</Link>
          <Link to="/contact" className="text-green_3 hover:text-green_2 text-lg font-pragatiNarrow">Contact</Link>
          <Link to="/about" className="text-green_3 hover:text-green_2 text-lg font-pragatiNarrow">About Us</Link>
          <button className="bg-green_2 text-white_1 px-4 py-2 rounded-md hover:bg-green_3 transition-colors font-poppins">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

