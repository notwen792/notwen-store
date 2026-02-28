import Image from 'next/image';
import type { Product } from '@/lib/data';
import { Card } from './ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ProductCard({ product }: { product: Product }) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="bg-card border-none shadow-none rounded-lg overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-destructive/10 h-fit">
      <div className="relative h-64 w-full">
          {image && <Image src={image.imageUrl} alt={product.name} fill style={{objectFit: 'cover'}} data-ai-hint={image?.imageHint || ''} />}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
      </div>
      <div className="p-6 flex-grow flex flex-col bg-card">
          <h3 className="font-headline text-2xl text-white uppercase tracking-wider mb-1 transition-colors group-hover:text-destructive">{product.name}</h3>
          <p className="text-sm font-semibold text-destructive/80 mb-4">{product.category}</p>
          
          {product.description && (
            <div className="mb-6 text-base text-muted-foreground/90 whitespace-pre-line leading-relaxed border-l-4 border-destructive/40 pl-4 py-1 bg-white/5 rounded-r-md">
              {product.description}
            </div>
          )}

          <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
              <div>
                  {product.price > 0 && (
                    <p className="text-2xl font-headline tracking-wider text-white">{product.price.toFixed(2)} EUR</p>
                  )}
                  {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                          {product.originalPrice.toFixed(2)} EUR
                      </p>
                  )}
                  {product.price === 0 && (
                    <p className="text-xl font-headline tracking-wider text-destructive">GRATIS / POSTULACIÓN</p>
                  )}
              </div>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/30 px-4 py-2 rounded-full cursor-not-allowed group/status shadow-sm">
                      <div className="h-2.5 w-2.5 rounded-full bg-destructive animate-pulse shadow-[0_0_8px_rgba(255,45,117,0.8)]" />
                      <span className="text-[11px] font-black text-destructive uppercase tracking-widest">No Disponible</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-card border-border text-white text-xs">
                    <p>Este producto no está disponible temporalmente</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </div>
      </div>
    </Card>
  );
}
