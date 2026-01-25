import Image from 'next/image';
import type { Product } from '@/lib/data';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle2, ShoppingCart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProductCard({ product }: { product: Product }) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="bg-card border-2 border-border/50 rounded-xl overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 group">
      <div className="relative h-48 w-full">
        {image && <Image src={image.imageUrl} alt={product.name} fill style={{objectFit: 'cover'}} data-ai-hint={image.imageHint} />}
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <p className="font-semibold text-muted-foreground text-xs">{product.category}</p>
        <h3 className="font-bold text-white text-base mt-1 mb-3">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold text-white">{product.price.toFixed(2)} EUR</p>
          {product.originalPrice && (
            <p className="text-sm text-destructive line-through">
              {product.originalPrice.toFixed(2)} EUR
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex-col items-start gap-4 border-t border-border/50">
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Purchase
        </Button>
        <ul className="space-y-2 text-xs w-full pt-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[hsl(var(--chart-2))]" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
