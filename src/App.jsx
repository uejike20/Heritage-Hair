import React, { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = () => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to Cart! 🛒",
      description: "Product successfully added to your cart",
    });
  };

  const handleNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const productsData = [
    {
      id: 1,
      name: "Shea Hair Butter Whip",
      price: "$24.99",
      originalPrice: "$34.99",
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/55f19762-f701-4a1a-bcdc-a60cd5799f13/8533415e6b5cb92b62bad3d98cfd54d7.jpg",
      description: "Fenugreek, Ayurvedic herbs and natural oils for all hair types",
      benefits: ["100% Chemical Free", "Suitable for Braids", "17 Oz"]
    },
    {
      id: 2,
      name: "Premium Shea Butter Collection",
      price: "$39.99",
      originalPrice: "$49.99",
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/55f19762-f701-4a1a-bcdc-a60cd5799f13/e77854be46d04ced20c0db074fbca9ca.jpg",
      description: "Complete hair care system with natural ingredients",
      benefits: ["Permed & Natural Hair", "Ayurvedic Formula", "Premium Quality"]
    }
  ];

  const testimonialsData = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Heritage Hair transformed my damaged hair completely! The natural ingredients work like magic.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maya Patel",
      rating: 5,
      text: "Finally found a product that works for my natural hair texture. Love the chemical-free formula!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Chen",
      rating: 5,
      text: "The shea butter whip is incredible. My hair has never been softer and more manageable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      <Toaster />
      <Navigation cartItems={cartItems} handleNotImplemented={handleNotImplemented} />
      <HeroSection handleNotImplemented={handleNotImplemented} />
      <FeaturesSection />
      <ProductsSection products={productsData} handleAddToCart={handleAddToCart} />
      <AboutSection />
      <TestimonialsSection testimonials={testimonialsData} />
      <ContactSection handleNotImplemented={handleNotImplemented} />
      <Footer />
    </div>
  );
};

export default App;