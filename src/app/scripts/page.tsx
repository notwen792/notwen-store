
import { ProductCard } from '@/components/profile-card';
import { products } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ScriptsPage() {
  const negociosProducts = products.filter(p => p.category === 'Negocios');
  const postulacionesProducts = products.filter(p => p.category === 'Postulaciones');
  const heroImage = PlaceHolderImages.find(img => img.id === 'negocios-hero');

  return (
    <main className="flex-grow bg-background">
      {/* Hero Section for Negocios - Con la imagen solicitada */}
      <section className="relative h-64 w-full flex items-center justify-center overflow-hidden border-b border-white/5">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Negocios Background"
            fill
            className="object-cover opacity-40"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-widest text-white">
            NEGOCIOS-NOTWEN
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto font-medium">
            Explora nuestra selección exclusiva de negocios y mapeos diseñados para el máximo realismo.
          </p>
        </div>
      </section>

      <div className="p-8 md:p-12 space-y-20">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {negociosProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
              POSTULACIONES-NOTWEN
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              ¿Quieres formar parte de nuestro equipo o liderar una facción? Presenta tu candidatura.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {postulacionesProducts.length > 0 ? (
              postulacionesProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground italic text-lg">No hay postulaciones abiertas en este momento.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
