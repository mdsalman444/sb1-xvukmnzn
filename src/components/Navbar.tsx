import React from 'react';
import { Menu, X, Server, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Server className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-white text-xl font-bold">CraftHost</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
              <a href="#plans" className="text-gray-300 hover:text-white px-3 py-2">Plans</a>
              <a href="#locations" className="text-gray-300 hover:text-white px-3 py-2">Locations</a>
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2">Features</a>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
                <User className="mr-2 h-4 w-4" />
                Login / Register
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
            <a href="#plans" className="text-gray-300 hover:text-white block px-3 py-2">Plans</a>
            <a href="#locations" className="text-gray-300 hover:text-white block px-3 py-2">Locations</a>
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2">Features</a>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full flex items-center justify-center">
              <User className="mr-2 h-4 w-4" />
              Login / Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}