import Image from 'next/image';
import type { Product } from '@/lib/data';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export function ProductCard({ product }: { product: Product }) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="bg-card border-none shadow-none rounded-lg overflow-hidden flex flex-col group">
      <Link href="#">
        <div className="relative h-64 w-full">
            {image && <Image src={image.imageUrl} alt={product.name} fill style={{objectFit: 'cover'}} data-ai-hint={image?.imageHint || ''} />}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
        </div>
      </Link>
      <div className="p-4 flex-grow flex flex-col bg-card">
          <Link href="#" className="group/text">
            <h3 className="font-semibold text-white text-base mb-1 group-hover/text:text-primary transition-colors">{product.name}</h3>
          </Link>
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
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full">
                  <ShoppingCart className="h-5 w-5" />
              </Button>
          </div>
      </div>
    </Card>
  );
}
