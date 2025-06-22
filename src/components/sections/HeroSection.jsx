import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ handleNotImplemented }) => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-emerald-900 leading-tight">
                Radiating
                <span className="text-gradient-gold block">Natural Beauty</span>
              </h1>
              <p className="text-xl text-emerald-700 leading-relaxed">
                Discover the power of 100% chemical-free hair care with our premium shea butter collection. 
                Crafted with fenugreek, ayurvedic herbs, and natural oils for all hair types.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-gold text-white hover:scale-105 transition-transform pulse-glow"
                onClick={handleNotImplemented}
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#DAB257] text-[#A88842] hover:bg-[#DAB257] hover:text-white transition-colors"
                onClick={handleNotImplemented}
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A88842]">100%</div>
                <div className="text-sm text-emerald-600">Chemical Free</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A88842]">5★</div>
                <div className="text-sm text-emerald-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A88842]">10K+</div>
                <div className="text-sm text-emerald-600">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="floating-animation">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/55f19762-f701-4a1a-bcdc-a60cd5799f13/ecda92a95fed2fe32dc8cf774201326e.jpg"
                alt="Heritage Hair premium shea butter products with natural ingredients"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-gold rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;