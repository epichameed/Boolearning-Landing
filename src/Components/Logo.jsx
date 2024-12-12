import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-green_3"></div>
      <span className="ml-2 text-xl font-bold font-rambla text-green_3">LOGO</span>
    </Link>
  )
}

export default Logo

