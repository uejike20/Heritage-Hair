import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ProductsSection = ({ products, handleAddToCart }) => {
  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-playfair font-bold text-gradient-gold mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Discover our carefully curated range of natural hair care products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative">
                <img 
                  src={product.image}
                  alt={`${product.name} - Premium natural hair care product`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#DAB257] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Best Seller
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-[#A88842] mb-2">
                  {product.name}
                </h3>
                <p className="text-emerald-700 mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit, idx) => (
                    <span 
                      key={idx}
                      className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      <Check className="w-3 h-3 mr-1" />
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-emerald-800">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <Button 
                    className="gradient-gold text-white hover:scale-105 transition-transform"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;