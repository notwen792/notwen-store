import { ProductCard } from '@/components/profile-card';
import { products } from '@/lib/data';

export default function PacksPage() {
  const packProducts = products.filter(product => product.category === 'Packs');

  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          Our Packs
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Discover our exclusive bundles and save on your favorite products.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packProducts.length > 0 ? (
          packProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No packs available at the moment.</p>
        )}
      </div>
    </main>
  );
}
