import Image from 'next/image';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { CodeXml, Star } from 'lucide-react';
import Link from 'next/link';

const FeaturedProduct = ({ product }: { product: any }) => {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);
  return (
    <Link href="/scripts">
      <Card className="flex items-center p-3 bg-card border-2 border-border/50 hover:border-primary/50 transition-colors duration-300 h-full">
        {image && (
          <div className="relative w-16 h-10 mr-4 rounded-md overflow-hidden flex-shrink-0">
            <Image src={image.imageUrl} alt={product.name} fill style={{ objectFit: 'cover' }} data-ai-hint={image?.imageHint || ''} />
          </div>
        )}
        <div className="flex-grow">
          <h4 className="font-semibold text-white text-sm">{product.name}</h4>
          <p className="text-muted-foreground text-sm">{product.price.toFixed(2)} EUR</p>
        </div>
        <Star className="h-5 w-5 text-cyan-400 fill-cyan-400 ml-4 flex-shrink-0" />
      </Card>
    </Link>
  );
};

const FeatureCard = ({ icon, title, children, imageId }: { icon: React.ReactNode, title: string, children: React.ReactNode, imageId: string }) => {
    const image = PlaceHolderImages.find((img) => img.id === imageId);
    return (
        <Card className="bg-card border-2 border-border/50 rounded-xl overflow-hidden flex flex-col">
            <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                    {icon}
                    <h3 className="font-headline text-2xl text-primary tracking-wider">{title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                    {children}
                </p>
            </div>
            {image && 
            <div className="relative h-56 w-full">
                <Image src={image.imageUrl} alt={title} fill style={{objectFit: 'cover'}} data-ai-hint={image.imageHint} />
            </div>
            }
        </Card>
    )
}

const GamepadIcon = () => (
    <div className="text-white font-mono font-bold leading-none" style={{fontSize: '1.2rem'}}>
        <span className="block tracking-widest">ΔΟ</span>
        <span className="tracking-widest">ΧΟ</span>
    </div>
)

export default function Home() {
  return (
    <main className="flex-grow p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {products[3] && <FeaturedProduct product={products[3]} />}
        {products[0] && <FeaturedProduct product={products[0]} />}
      </div>
      
      <div className="bg-card border-2 border-border/50 rounded-xl p-8 mb-8">
        <p className="text-primary font-semibold text-sm uppercase">Welcome to</p>
        <h2 className="font-headline text-4xl uppercase tracking-wider text-white mt-2 mb-4">
          Origen Network Store
        </h2>
        <div className="text-muted-foreground space-y-4 text-sm max-w-3xl">
            <p>
                Welcome to the new Origen Network Script Store for GTA V, the place to be to find the best scripts to enhance your Grand Theft Auto V gaming experience.
            </p>
            <p>
                In our store, you will find a wide variety of <span className="text-white font-semibold">high-quality scripts</span>, designed by Origen Network's <span className="text-white font-semibold">programming experts</span>. Are you looking for a script to <span className="text-white font-semibold">improve</span> the gameplay of your game? Or maybe you need a script to add new <span className="text-white font-semibold">vehicles or weapons</span>? No matter what your need is, our script store has <span className="text-white font-semibold">just what you're looking for</span>.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard 
            icon={<CodeXml className="h-8 w-8 text-white" />} 
            title="UNIQUE SCRIPTS"
            imageId="unique-scripts"
        >
            Our programming team works to create new exclusive possibilities for our players
        </FeatureCard>
        <FeatureCard 
            icon={<GamepadIcon />}
            title="NEW GAME MODES"
            imageId="new-game-modes"
        >
            Discover a new way to play in FiveM. We have unique and innovative game modes
        </FeatureCard>
      </div>

    </main>
  );
}
