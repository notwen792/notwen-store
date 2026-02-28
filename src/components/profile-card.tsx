import Image from 'next/image';
import type { Product } from '@/lib/data';
import { Card } from './ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Ban } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ProductCard({ product }: { product: Product }) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="bg-card border-none shadow-none rounded-lg overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-destructive/10">
      <div className="relative h-64 w-full">
          {image && <Image src={image.imageUrl} alt={product.name} fill style={{objectFit: 'cover'}} data-ai-hint={image?.imageHint || ''} />}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
          <div className="absolute top-3 right-3">
            <div className="bg-destructive/90 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
              <Ban className="h-3 w-3" />
              AGOTADO
            </div>
          </div>
      </div>
      <div className="p-4 flex-grow flex flex-col bg-card">
          <h3 className="font-semibold text-white text-base mb-1 transition-colors group-hover:text-destructive">{product.name}</h3>
          <p className="text-sm text-muted-foreground flex-grow">{product.category}</p>
          <div className="flex justify-between items-center mt-4">
              <div>
                  <p className="text-lg font-bold text-white">{product.price.toFixed(2)} EUR</p>
                  {product.originalPrice && (
                      <p className="text-xs text-muted-foreground line-through">
                          {product.originalPrice.toFixed(2)} EUR
                      </p>
                  )}
              </div>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/30 px-3 py-1.5 rounded-full cursor-not-allowed group/status">
                      <div className="h-2 w-2 rounded-full bg-destructive animate-pulse shadow-[0_0_8px_rgba(255,45,117,0.8)]" />
                      <span className="text-[10px] font-extrabold text-destructive uppercase tracking-wider">No Disponible</span>
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
