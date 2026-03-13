"use client";

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Star } from 'lucide-react';

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-emerald-50 overflow-hidden">
      {/* Background patterns could go here */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-6 px-4 py-1 animate-fade-in">
            New: Daisy Mehta Signature Pan
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-950 mb-6 tracking-tight leading-tight">
            Premium Pan. <span className="text-emerald-700">Delivered Globally.</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-800/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the authentic taste of premium betel leaf preparations, hand-crafted and delivered to over 128 countries within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 px-8 py-6 text-lg h-auto shadow-lg shadow-emerald-200 group" onClick={scrollToProducts}>
              Shop Now
              <ShoppingBag className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg h-auto" onClick={scrollToProducts}>
              Find on Amazon
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg h-auto" onClick={scrollToProducts}>
              Order on DoorDash
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-emerald-900">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-emerald-900">50,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-emerald-900">Global Shipping</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative leaf shapes could go here */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
