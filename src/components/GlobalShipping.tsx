"use client";

import { useState } from 'react';
import { Globe, Plane, Package, Truck } from 'lucide-react';
import { countries } from '@/data/countries';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function getShippingTime(tier: number) {
  switch (tier) {
    case 1:
      return '2-3 business days';
    case 2:
      return '3-5 business days';
    case 3:
      return '5-7 business days';
    case 4:
      return '7-10 business days';
    default:
      return 'Varies by location';
  }
}

export function GlobalShipping() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(countries.find(c => c.name === 'United States')?.code || countries[0]?.code);

  const selectedCountry = countries.find(c => c.code === selectedCountryCode);

  return (
    <section id="shipping" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <Badge className="bg-emerald-900 text-emerald-200 border-emerald-800 mb-6 px-4 py-1">
              Serving {countries.length} Countries
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Ready to ship to your <span className="text-amber-500">doorstep, globally.</span>
            </h2>
            <p className="text-lg md:text-xl text-emerald-200/70 mb-10 leading-relaxed max-w-2xl">
              We've partnered with major global logistics providers to ensure our premium pan stays fresh from our kitchen to your home, no matter where you are in the world.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="flex items-center gap-3">
                <Plane className="w-8 h-8 text-amber-500" />
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-100">Air Express</span>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-amber-500" />
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-100">Fresh Seal</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-amber-500" />
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-100">Doorstep Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-emerald-950 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-emerald-700" />
              Check Availability
            </h3>
            <p className="text-emerald-800/70 mb-8">Select your country to see shipping times and rates for our premium collections.</p>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-emerald-900/40">Select Your Country</label>
                <Select value={selectedCountryCode} onValueChange={(val) => { if (val) setSelectedCountryCode(val); }}>
                  <SelectTrigger className="w-full h-14 bg-emerald-50/50 border-emerald-100 focus:ring-emerald-700 text-lg">
                    <SelectValue placeholder="Search country..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-80">
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code} className="text-lg py-3">
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {selectedCountry && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <p className="text-sm text-emerald-800 font-medium">Estimated Delivery:</p>
                  <p className="text-xl font-bold text-emerald-950">{getShippingTime(selectedCountry.tier)}</p>
                  <p className="text-xs text-emerald-600 mt-1">Region: {selectedCountry.region}</p>
                </div>
              )}
              
              <Button className="w-full h-14 bg-emerald-700 hover:bg-emerald-800 text-lg font-bold shadow-lg shadow-emerald-100">
                Proceed to Shop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${className}`}>
      {children}
    </span>
  );
}
