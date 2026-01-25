import { ProductCard } from '@/components/profile-card';
import { products } from '@/lib/data';

export default function ScriptsPage() {
  return (
    <main className="flex-grow p-8 bg-background">
      <h2 className="font-headline text-4xl uppercase tracking-wider text-white mb-8">
        Scripts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
