import { ProductCard } from '@/components/profile-card';
import { products } from '@/lib/data';

export default function PacksPage() {
  const packProducts = products.filter(product => product.category === 'Packs');

  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          PACKS-NOTWEN
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Ahorra con nuestros paquetes exclusivos. La mejor combinación de activos para configurar tu servidor de forma rápida, eficiente y económica.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {packProducts.length > 0 ? (
          packProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground text-lg">No hay packs disponibles en este momento.</p>
        )}
      </div>
    </main>
  );
}
