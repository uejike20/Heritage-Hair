// src/components/sections/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import NewAboutImage from '@/images/heritage-hair-models.jpg'; // 1. ADD THIS IMPORT

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Our Heritage Story
            </h2>
            <p className="text-lg leading-relaxed text-emerald-100">
              Heritage Hair was born from a passion for natural beauty and traditional wisdom. 
              We believe that the best hair care comes from nature's purest ingredients, 
              carefully selected and lovingly crafted.
            </p>
            <p className="text-lg leading-relaxed text-emerald-100">
              Our shea butter collection combines ancient Ayurvedic knowledge with modern 
              hair care science, creating products that truly nourish and transform your hair 
              from root to tip.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-[#DAB257]">2018</div>
                <div className="text-emerald-200">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#DAB257]">50+</div>
                <div className="text-emerald-200">Natural Ingredients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img  
              alt="Three happy children with beautiful natural hair" // 3. UPDATE THE ALT TEXT
              className="w-full h-auto rounded-2xl shadow-2xl"
              src={NewAboutImage} // 2. USE THE IMPORTED IMAGE
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;