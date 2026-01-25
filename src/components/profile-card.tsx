import Image from 'next/image';
import type { Product } from '@/lib/data';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

export function ProductCard({ product }: { product: Product }) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <Card className="bg-card border-none shadow-none rounded-lg overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-destructive/10">
      <Link href="#">
        <div className="relative h-64 w-full">
            {image && <Image src={image.imageUrl} alt={product.name} fill style={{objectFit: 'cover'}} data-ai-hint={image?.imageHint || ''} />}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
        </div>
      </Link>
      <div className="p-4 flex-grow flex flex-col bg-card">
          <Link href="#" className="group/text">
            <h3 className="font-semibold text-white text-base mb-1 group-hover/text:text-destructive transition-colors">{product.name}</h3>
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="group text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full">
                      <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card border-border text-white">
                  <DialogHeader>
                    <DialogTitle className="text-destructive font-headline tracking-wider text-2xl">{product.name}</DialogTitle>
                    <DialogDescription>
                      {product.description ? 'Product Description' : 'This pack includes the following features:'}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 max-h-[60vh] overflow-y-auto">
                    {product.description ? (
                      <div className="text-sm text-muted-foreground whitespace-pre-wrap">{product.description}</div>
                    ) : (
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-destructive flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                   <DialogFooter>
                    <Button asChild className="w-full bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all duration-300">
                      <Link href="https://discord.gg/Z6KvkfFVts" target="_blank" rel="noopener noreferrer">
                        Proceed to Discord Store
                        <ShoppingCart className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
          </div>
      </div>
    </Card>
  );
}
