import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-sm text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">Currency Converter</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Convert</a>
            <a href="#" className="hover:underline">About</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-2">
          <a href="#" className="block py-2 px-4 hover:bg-blue-700">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700">Convert</a>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
