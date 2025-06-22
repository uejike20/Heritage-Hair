import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-playfair font-bold text-emerald-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Real stories from real people who've transformed their hair with Heritage Hair
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - Heritage Hair customer`}
                  className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold text-emerald-900">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DAB257] text-[#DAB257]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-emerald-700 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;