import Image from 'next/image';
import type { Product } from '@/lib/data';
import { Card } from './ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
  onApply?: (product: Product) => void;
}

export function ProductCard({ product, onApply }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);
  const isAvailable = product.available;

  return (
    <Card className="bg-card border-none shadow-none rounded-xl overflow-hidden flex flex-col group transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-destructive/20 w-full">
      <div className="relative h-64 w-full overflow-hidden shrink-0">
          {image && (
            <Image 
              src={image.imageUrl} 
              alt={product.name} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
              data-ai-hint={image?.imageHint || ''} 
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8 flex-grow flex flex-col bg-card">
          <h3 className="font-headline text-4xl text-white uppercase tracking-wider mb-2 transition-colors group-hover:text-destructive">
            {product.name}
          </h3>
          <p className="text-sm font-bold text-destructive/90 mb-6 tracking-widest uppercase">
            {product.category}
          </p>
          
          {product.description && (
            <div className="mb-8 text-lg text-muted-foreground/95 whitespace-pre-line leading-relaxed border-l-4 border-destructive pl-6 py-2 bg-white/5 rounded-lg">
              {product.description}
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto pt-6 border-t border-white/10 gap-4">
              <div className="flex flex-wrap items-center gap-3 w-full">
                  {/* Unified Price and Status Label */}
                  <div className={cn(
                    "px-5 py-2 rounded-md border-2 transition-all duration-300 flex flex-col items-center justify-center min-w-[140px]",
                    isAvailable 
                      ? "border-chart-2 bg-chart-2/20 shadow-lg shadow-chart-2/10" 
                      : "border-destructive bg-destructive/20 shadow-lg shadow-destructive/10"
                  )}>
                    {isAvailable && (
                      <span className="text-2xl font-headline tracking-widest leading-none text-white">
                        {product.price > 0 ? `${product.price.toFixed(2)}€` : "GRATIS"}
                      </span>
                    )}
                    <span className={cn(
                      "font-black uppercase tracking-[0.2em] whitespace-nowrap",
                      isAvailable ? "text-chart-2 text-[9px] mt-1" : "text-destructive text-sm py-1"
                    )}>
                      {isAvailable ? "DISPONIBLE" : "NO DISPONIBLE"}
                    </span>
                  </div>

                  {isAvailable && onApply && (
                    <Button 
                      onClick={() => onApply(product)}
                      className="bg-destructive hover:bg-destructive/90 text-white font-headline tracking-wider text-lg px-6 h-12 shadow-lg shadow-destructive/20 transition-all active:scale-95 ml-auto"
                    >
                      LO QUIERO
                    </Button>
                  )}
              </div>
          </div>
      </div>
    </Card>
  );
}
