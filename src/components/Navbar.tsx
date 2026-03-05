import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm shadow-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">BrandName</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-primary-400 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-primary-400 transition">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-400 transition">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-300 hover:text-primary-400 py-2">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-300 hover:text-primary-400 py-2">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-primary-400 py-2">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
