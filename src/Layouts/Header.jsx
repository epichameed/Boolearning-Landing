import React, { useState } from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import MobileMenu from '../components/MobileMenu'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white_1 px-4 py-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        {/* Mobile Menu Button */}
        <button 
          className="flex md:hidden text-green_3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <Navigation />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

export default Header

