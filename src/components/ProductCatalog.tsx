"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, ExternalLink, Loader2, Truck } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ProductCatalog() {
  const [loadingStripeId, setLoadingStripeId] = useState<string | null>(null);
  const [loadingAmazonId, setLoadingAmazonId] = useState<string | null>(null);
  const [loadingDoorDashId, setLoadingDoorDashId] = useState<string | null>(null);

  const handleStripeCheckout = async (product: any) => {
    try {
      setLoadingStripeId(product.id);
      
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Failed to create checkout session:', data.error);
        alert('Failed to initiate checkout. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout.');
    } finally {
      setLoadingStripeId(null);
    }
  };

  const handleAmazonRedirect = async (product: any) => {
    try {
      setLoadingAmazonId(product.id);
      
      const response = await fetch('/api/amazon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
        }),
      });

      const data = await response.json();
      
      if (data.amazonUrl) {
        window.open(data.amazonUrl, '_blank');
      } else {
        console.error('Failed to generate Amazon link:', data.error);
        alert('Could not connect to Amazon at this time.');
      }
    } catch (error) {
      console.error('Amazon redirect error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoadingAmazonId(null);
    }
  };

  const handleDoorDashRedirect = async (product: any) => {
    try {
      setLoadingDoorDashId(product.id);
      
      const response = await fetch('/api/doordash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
        }),
      });

      const data = await response.json();
      
      if (data.doordashUrl) {
        window.open(data.doordashUrl, '_blank');
      } else {
        console.error('Failed to generate DoorDash link:', data.error);
        alert('Could not connect to DoorDash at this time.');
      }
    } catch (error) {
      console.error('DoorDash redirect error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoadingDoorDashId(null);
    }
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-950 mb-4 tracking-tight">Our Curated Selection</h2>
          <p className="text-lg text-emerald-800/70">From the narrow lanes of Banaras to the modern kitchens of London, we bring you the finest pan types in the world.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-emerald-50 hover:border-emerald-200 transition-all hover:shadow-xl hover:shadow-emerald-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden bg-emerald-50">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-emerald-800 hover:bg-emerald-900 border-none px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {product.tag}
                </Badge>
              </div>
              <CardHeader className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-bold text-emerald-900">{product.name}</CardTitle>
                  <span className="text-xl font-bold text-amber-700">${product.price}</span>
                </div>
                <CardDescription className="text-base text-emerald-800/70 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col gap-3 pb-8">
                <Button 
                  onClick={() => handleStripeCheckout(product)}
                  disabled={loadingStripeId === product.id || loadingAmazonId === product.id || loadingDoorDashId === product.id}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 h-12 text-md font-semibold transition-all"
                >
                  {loadingStripeId === product.id ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <ShoppingCart className="w-4 h-4 mr-2" />
                  )}
                  Direct Checkout
                </Button>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <Button 
                    variant="outline" 
                    onClick={() => handleAmazonRedirect(product)}
                    disabled={loadingStripeId === product.id || loadingAmazonId === product.id || loadingDoorDashId === product.id}
                    className="w-full border-amber-600 text-amber-700 hover:bg-amber-50 h-12 text-sm font-semibold border-2 px-2"
                  >
                    {loadingAmazonId === product.id ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin shrink-0" />
                    ) : (
                      <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                    )}
                    Amazon
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleDoorDashRedirect(product)}
                    disabled={loadingStripeId === product.id || loadingAmazonId === product.id || loadingDoorDashId === product.id}
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 h-12 text-sm font-semibold border-2 px-2"
                  >
                    {loadingDoorDashId === product.id ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin shrink-0" />
                    ) : (
                      <Truck className="w-4 h-4 mr-2 shrink-0" />
                    )}
                    DoorDash
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
