import { ProductCard } from '@/components/profile-card';
import { products } from '@/lib/data';

export default function ScriptsPage() {
  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          Our Scripts
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Explore our collection of high-quality scripts, designed to enhance your gaming experience.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
