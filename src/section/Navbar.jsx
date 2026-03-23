import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="bg-white text-[#2a2a2f] sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="inline text-myColor">
          <img src="/Svg/2.svg" alt="Pagestrap" width="" height="" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-myColor hover:opacity-70 transition-opacity">
              {label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:block">
          <Button className="bg-myColor text-white hover:bg-black hover:text-gray-200">
            Get a Quote
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-myColor focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg py-4 flex flex-col items-center space-y-4">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-myColor hover:opacity-70 transition-opacity" onClick={handleNavClick}>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={handleNavClick}>
            <Button className="bg-myColor text-white hover:bg-black hover:text-gray-200">
              Get a Quote
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
