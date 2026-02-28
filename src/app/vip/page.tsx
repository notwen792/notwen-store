import { ProductCard } from '@/components/profile-card';
import { products } from '@/lib/data';

export default function VipPage() {
  const vipProducts = products.filter(product => product.category === 'VIP');

  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          VIP-NOTWEN
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Acceso exclusivo y ventajas premium para los miembros más destacados de nuestra comunidad. Eleva tu experiencia al siguiente nivel.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {vipProducts.length > 0 ? (
          vipProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground italic">No hay suscripciones VIP disponibles en este momento.</p>
        )}
      </div>
    </main>
  );
}