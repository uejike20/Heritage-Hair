import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-emerald-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-xl font-playfair font-bold">Heritage Hair</span>
            </div>
            <p className="text-emerald-200">
              Radiating natural beauty through premium, chemical-free hair care products.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-emerald-200 hover:text-[#DAB257] transition-colors">Home</a>
              <a href="#products" className="block text-emerald-200 hover:text-[#DAB257] transition-colors">Products</a>
              <a href="#about" className="block text-emerald-200 hover:text-[#DAB257] transition-colors">About</a>
              <a href="#contact" className="block text-emerald-200 hover:text-[#DAB257] transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <div className="space-y-2">
              <span className="block text-emerald-200">Shea Hair Butter</span>
              <span className="block text-emerald-200">Natural Oils</span>
              <span className="block text-emerald-200">Ayurvedic Blends</span>
              <span className="block text-emerald-200">Hair Treatments</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-emerald-200">
              <p>contact.heritageclub2023@gmail.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Natural Beauty Lane<br />Wellness City, WC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
          <p>&copy; {new Date().getFullYear()} Heritage Hair. All rights reserved. Radiating Natural Beauty.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;