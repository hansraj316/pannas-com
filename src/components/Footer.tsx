import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-50 py-24 border-t border-emerald-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold tracking-tight text-emerald-800">
              PANNAS<span className="text-amber-600">.COM</span>
            </Link>
            <p className="text-emerald-800/70 text-lg leading-relaxed">
              Redefining the cultural art of pan for a global audience. Hand-crafted with love, delivered with care.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-emerald-800 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-colors">
                <Facebook className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-emerald-800 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-colors">
                <Twitter className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-emerald-800 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-colors">
                <Instagram className="w-6 h-6" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-950 uppercase tracking-wider">The Collection</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Meeta Pan</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Sada Pan</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Kolkata Special</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Banarasi Classic</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Daisy Mehta Fusion</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-950 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Our Story</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Sourcing</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Global Logistics</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-lg text-emerald-800/70 hover:text-amber-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-950 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <span className="text-lg text-emerald-800/70">hello@pannas.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <span className="text-lg text-emerald-800/70">+1 (888) PAN-WORLD</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-amber-600" />
                <span className="text-lg text-emerald-800/70">Global Headquarters, London</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <p className="text-emerald-800/50 text-base">© 2026 Pannas.com. All rights reserved.</p>
          <div className="flex gap-6 grayscale opacity-50">
            {/* Payment Icons Placeholder */}
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/60">Visa</span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/60">Mastercard</span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/60">Amex</span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/60">PayPal</span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/60">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Button({ children, variant = 'ghost', size = 'icon', className = '' }: any) {
  return (
    <button className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </button>
  );
}
