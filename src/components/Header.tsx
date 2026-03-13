import Link from 'next/link';
import { ShoppingCart, Globe, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-emerald-800">
          PANNAS<span className="text-amber-600">.COM</span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="#products" className="text-sm font-medium hover:text-emerald-700 transition-colors">
                Our Pan
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#shipping" className="text-sm font-medium hover:text-emerald-700 transition-colors">
                Global Shipping
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#products" className="text-sm font-medium hover:text-emerald-700 transition-colors">
                Amazon Store
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#products" className="text-sm font-medium hover:text-emerald-700 transition-colors">
                DoorDash Delivery
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-emerald-800">
            <Globe className="w-4 h-4" />
            <span>Serving 128 Countries</span>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Sign In
          </Button>
          <Button size="sm" className="bg-emerald-700 hover:bg-emerald-800">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart
          </Button>
        </div>
      </div>
    </header>
  );
}
