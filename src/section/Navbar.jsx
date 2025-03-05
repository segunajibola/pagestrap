import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#0000ff] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="inline text-[#0000ff]">
          <img src="/pagestrap-text.png" alt="" width="150px" height="3px" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/services" className="text-[#0000ff] hover:text-red-500">
            Services
          </a>
          <a href="/portfolio" className="text-[#0000ff] hover:text-red-500">
            Portfolio
          </a>
          <a href="/about" className="text-[#0000ff] hover:text-red-500">
            About
          </a>
          <a href="/contact" className="text-[#0000ff] hover:text-red-500">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-blue-500 text-white hover:bg-black hover:text-gray-200">
          Get a Quote
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          <a href="/services" className="text-[#0000ff] hover:text-red-500">
            Services
          </a>
          <a href="/portfolio" className="text-[#0000ff] hover:text-red-500">
            Portfolio
          </a>
          <a href="/about" className="text-[#0000ff] hover:text-red-500">
            About
          </a>
          <a href="/contact" className="text-[#0000ff] hover:text-red-500">
            Contact
          </a>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
