// src/components/sections/AboutSection.jsx

import React from 'react';
import { motion } from 'framer-motion';

// 1. Import BOTH images at the top
import AboutImageFront from '@/images/about-image-front.jpg';
import AboutImageBack from '@/images/about-image-back.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* The text content on the left remains the same */}
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

          {/* 2. This is the new flip card container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Add `group` and `perspective` for the 3D effect
            className="group [perspective:1000px]"
          >
            {/* This inner div is what will actually flip */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* === FRONT OF THE CARD === */}
              <div className="absolute w-full h-full [backface-visibility:hidden]">
                <img  
                  src={AboutImageFront}
                  alt="Heritage Hair products display"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* === BACK OF THE CARD === */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                 <img  
                  src={AboutImageBack}
                  alt="Three happy children with beautiful natural hair"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;