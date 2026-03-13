import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCatalog } from '@/components/ProductCatalog';
import { GlobalShipping } from '@/components/GlobalShipping';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-emerald-950 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      <Hero />
      <ProductCatalog />
      <GlobalShipping />
      <Footer />
    </main>
  );
}
