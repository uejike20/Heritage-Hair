import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navigation = ({ cartItems, handleNotImplemented }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 gradient-emerald-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-2xl font-playfair font-bold text-emerald-800">Heritage Hair</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-emerald-800 hover:text-[#DAB257] transition-colors">Home</a>
            <a href="#products" className="text-emerald-800 hover:text-[#DAB257] transition-colors">Products</a>
            <a href="#about" className="text-emerald-800 hover:text-[#DAB257] transition-colors">About</a>
            <a href="#testimonials" className="text-emerald-800 hover:text-[#DAB257] transition-colors">Reviews</a>
            <a href="#contact" className="text-emerald-800 hover:text-[#DAB257] transition-colors">Contact</a>
            <Button 
              variant="outline" 
              size="sm" 
              className="relative"
              onClick={handleNotImplemented}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#DAB257] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-t"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-emerald-800 hover:text-[#DAB257]" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#products" className="block text-emerald-800 hover:text-[#DAB257]" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#about" className="block text-emerald-800 hover:text-[#DAB257]" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="block text-emerald-800 hover:text-[#DAB257]" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="block text-emerald-800 hover:text-[#DAB257]" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button variant="outline" size="sm" className="w-full" onClick={() => { handleNotImplemented(); setIsMenuOpen(false); }}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart ({cartItems})
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;