import Image from 'next/image';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CodeXml, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const featuredProduct = products[0];
  const image = PlaceHolderImages.find((img) => img.id === featuredProduct.imageId);

  return (
    <main className="flex-grow bg-background text-white">
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center p-8">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        {image && 
            <div className="absolute inset-0">
                <Image src={image.imageUrl} alt="Hero background" fill style={{ objectFit: 'cover' }} className="opacity-20" data-ai-hint={image.imageHint} />
            </div>
        }
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="font-headline text-6xl md:text-8xl uppercase tracking-widest">
                Origen
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light tracking-[0.3em] uppercase">
                Network Store
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                High-quality scripts and maps to enhance your Grand Theft Auto V experience.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/scripts">
                    Explore Scripts
                    <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="p-8 md:p-12">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl text-white tracking-wider">Why Origen?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We are committed to providing the best for our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border/20">
                <CodeXml className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-2xl tracking-wider mb-2">Unique Scripts</h3>
                <p className="text-muted-foreground text-sm">Our programming team works to create new exclusive possibilities for our players, compatible with QBCore & ESX.</p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border/20">
                <Gamepad2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-2xl tracking-wider mb-2">New Game Modes</h3>
                <p className="text-muted-foreground text-sm">Discover a new way to play in FiveM. We have unique and innovative game modes to change up the experience.</p>
            </div>
        </div>
      </section>
    </main>
  );
}
