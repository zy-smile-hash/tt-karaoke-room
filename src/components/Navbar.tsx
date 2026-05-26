import { Menu, X, Github, Download } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-bold text-xl">TeleportHQ</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#preview" className="text-gray-300 hover:text-white transition-colors">Preview</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </button>
            <button className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download</span>
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#preview" className="block text-gray-300 hover:text-white">Preview</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
            <a href="#testimonials" className="block text-gray-300 hover:text-white">Testimonials</a>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <button className="w-full text-left text-gray-300 hover:text-white flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </button>
              <button className="w-full text-left text-gray-300 hover:text-white flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
