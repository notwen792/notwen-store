import { ProductCard } from '@/components/profile-card';
import { products } from '@/lib/data';

export default function ScriptsPage() {
  const negociosProducts = products.filter(p => p.category === 'Negocios');

  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          NEGOCIOS-NOTWEN
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explora nuestra selección exclusiva de negocios y mapeos diseñados para llevar el roleplay de tu servidor a otro nivel de realismo y profesionalidad.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {negociosProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
