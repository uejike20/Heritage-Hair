import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = ({ handleNotImplemented }) => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-playfair font-bold text-emerald-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Have questions about our products? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-emerald-gold rounded-full flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900">Email Us</h3>
                <p className="text-emerald-700">contact.heritageclub2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-emerald-gold rounded-full flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900">Call Us</h3>
                <p className="text-emerald-700">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-emerald-gold rounded-full flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900">Visit Us</h3>
                <p className="text-emerald-700">123 Natural Beauty Lane<br />Wellness City, WC 12345</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <Button variant="outline" size="sm" onClick={handleNotImplemented} className="hover:bg-[#DAB257] hover:text-white hover:border-[#DAB257] transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleNotImplemented} className="hover:bg-[#DAB257] hover:text-white hover:border-[#DAB257] transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleNotImplemented} className="hover:bg-[#DAB257] hover:text-white hover:border-[#DAB257] transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNotImplemented(); }}>
              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-[#DAB257] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-[#DAB257] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-[#DAB257] focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <Button 
                type="submit"
                className="w-full gradient-gold text-white hover:scale-105 transition-transform"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;