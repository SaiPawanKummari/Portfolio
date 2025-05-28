import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Check if scrolled more than 20px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = id === "about" ? document.body : document.getElementById(id);
    if (element) {
      const offset = id === "about" ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuItems = ['about', 'education', 'experience', 'skills', 'projects', 'achievements', 'certifications', 'contact'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Navbar Logo with a dark circular background */}
          <span
            className="bg-gray-800 text-blue-400 font-bold text-2xl mr-4 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            IN
          </span>

          {/* Desktop Menu (Hidden on smaller devices) */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-blue-400 font-semibold text-lg capitalize hover:text-blue-300 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-blue-400 hover:text-blue-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Only visible when menu is open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md shadow-lg absolute left-0 right-0 p-4 transition-all">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-blue-400 font-semibold text-lg capitalize text-left px-4 py-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
