'use client';

import React, { useState } from 'react';
import { ProductCard } from '@/components/profile-card';
import { products, type Product } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NegocioForm } from '@/components/negocio-form';
import { ClipboardList } from 'lucide-react';

export default function ScriptsPage() {
  const negociosProducts = products.filter(p => p.category === 'Negocios');
  const postulacionesProducts = products.filter(p => p.category === 'Postulacion');
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleApply = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="flex-grow bg-background">
      {/* Hero Section for Negocios */}
      <section className="relative h-64 w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-card/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-widest text-white px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-destructive/20 drop-shadow-sm pr-2">
              NEGOCIOS-NOTWEN
            </span>
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
              <ProductCard 
                key={product.id} 
                product={product} 
                onApply={handleApply}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12 px-6">
            <h1 className="font-headline text-5xl uppercase tracking-wider text-white px-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-destructive/20 drop-shadow-sm pr-2">
                POSTULACION-NOTWEN
              </span>
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              ¿Quieres formar parte de nuestro equipo o liderar una facción? Presenta tu candidatura.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {postulacionesProducts.length > 0 ? (
              postulacionesProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onApply={handleApply}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground italic text-lg">No hay postulaciones abiertas en este momento.</p>
            )}
          </div>
        </div>
      </div>

      {/* Dialogo de Postulación */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-card border-border/40 p-0 overflow-hidden">
          <DialogHeader className="p-6 border-b border-white/5 bg-background/20">
            <DialogTitle className="font-headline text-3xl text-white uppercase tracking-wider flex items-center gap-3">
              <ClipboardList className="h-7 w-7 text-destructive" />
              Postulación: {selectedProduct?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <NegocioForm 
              initialBusinessName={selectedProduct.name} 
              onSuccess={() => setSelectedProduct(null)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
