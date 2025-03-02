import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center px-6">
          <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} PageStrap. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer