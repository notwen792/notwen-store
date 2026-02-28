
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
import { cn } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
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
            <div className="mb-8 text-lg text-muted-foreground/95 whitespace-pre-line leading-relaxed border-l-4 border-destructive pl-6 py-2 bg-white/5 rounded-r-lg">
              {product.description}
            </div>
          )}

          <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/10 gap-4">
              <div className="flex flex-col">
                  {product.price > 0 && (
                    <p className="text-3xl font-headline tracking-widest text-white">
                      {product.price.toFixed(2)} <span className="text-sm font-body text-muted-foreground">EUR</span>
                    </p>
                  )}
                  {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through decoration-destructive/50">
                          {product.originalPrice.toFixed(2)} EUR
                      </p>
                  )}
              </div>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={cn(
                      "flex items-center gap-2 border px-4 py-2 rounded-full cursor-not-allowed group/status shadow-lg shrink-0",
                      isAvailable 
                        ? "bg-chart-2/10 border-chart-2/20" 
                        : "bg-destructive/10 border-destructive/20"
                    )}>
                      <div className={cn(
                        "h-2 w-2 rounded-full animate-pulse",
                        isAvailable ? "bg-chart-2" : "bg-destructive"
                      )} />
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest whitespace-nowrap",
                        isAvailable ? "text-chart-2" : "text-destructive"
                      )}>
                        {isAvailable ? 'Disponible' : 'No Disponible'}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-card border-border text-white text-xs p-2">
                    <p>
                      {isAvailable 
                        ? 'Este producto está disponible para su adquisición' 
                        : 'Este producto no está disponible en este momento'}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          </div>
      </div>
    </Card>
  );
}
