import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "Chemical-free formulas with pure, organic ingredients"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Carefully crafted with the finest shea butter and herbs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "All Hair Types",
      description: "Perfect for natural, permed, and chemically treated hair"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Loved by Thousands",
      description: "Join our community of satisfied customers worldwide"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-playfair font-bold text-gradient-gold mb-4">
            Why Choose Heritage Hair?
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Experience the difference of authentic, natural hair care that honors traditional beauty wisdom
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl glass-effect hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#A88842] mb-2">{feature.title}</h3>
              <p className="text-emerald-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;