import Image from 'next/image';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Terminal, Gamepad2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const featuredProduct = products[0];
  const image = PlaceHolderImages.find((img) => img.id === featuredProduct.imageId);

  return (
    <main className="flex-grow bg-background text-white">
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center p-8">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        {image && 
            <div className="absolute inset-0">
                <Image src={'https://media.discordapp.net/attachments/1269644412875440128/1464997525227569317/dawndjawnd2.png?ex=697780c4&is=69762f44&hm=930eb81b8f580627cb68e24c19ec447c4dce99a2bcbadab70abfec6df2930c09&=&format=webp&quality=lossless'} alt="Hero background" fill style={{ objectFit: 'cover', objectPosition: 'right' }} className="opacity-20" data-ai-hint={'logo right'} />
            </div>
        }
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="font-headline text-6xl md:text-8xl uppercase tracking-widest">
                notwen
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] bg-clip-text text-transparent">
                Store
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                High-quality scripts and maps to enhance your Grand Theft Auto V experience.
            </p>
            <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all duration-300">
                <Link href="/scripts">
                    Explore Scripts
                    <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
                <div className="text-center md:text-left mb-12">
                    <h2 className="font-headline text-4xl text-white tracking-wider">¿Qué es notwen?</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto md:mx-0">We are committed to providing the best for our community.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card p-8 rounded-lg border border-border/20">
                        <Terminal className="h-10 w-10 text-destructive mb-4" />
                        <h3 className="font-headline text-2xl tracking-wider mb-2">SCRIPTS UNICOS</h3>
                        <p className="text-muted-foreground text-sm">aqui veras nuestros scripts echos y rediseños por el programador stewiexox</p>
                    </div>
                    <div className="bg-card p-8 rounded-lg border border-border/20">
                        <Gamepad2 className="h-10 w-10 text-destructive mb-4" />
                        <h3 className="font-headline text-2xl tracking-wider mb-2">notwen rp</h3>
                        <p className="text-muted-foreground text-sm">bienvenidos a nuestra comunidad notwen rp un servidor de roleplay creados por unos randoms que les apetecia y estan intentando crecer</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="bg-card p-6 rounded-lg border border-border/20 h-full">
                    <h3 className="font-headline text-2xl tracking-wider mb-6 text-center flex items-center justify-center gap-2">
                      <ShieldCheck className="h-7 w-7 text-destructive" />
                      Administrators
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12">
                                <AvatarImage src="https://storage.googleapis.com/databeat-vocal-files/7d23f374-1237-4d64-8975-5853f0985c49.png" alt="stewiexox" />
                                <AvatarFallback>S</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white transition-colors group-hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] group-hover:bg-clip-text group-hover:text-transparent">stewiexox</span>
                        </li>
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12">
                                <AvatarImage src="https://media.discordapp.net/attachments/1269644412875440128/1464991511300149404/WgAd3pVL_400x400.jpg?ex=69777b2a&is=697629aa&hm=44ccff30d3444d31d0bb3c9029b2b007cec3a4143fec8a655f385b33cb762f97&=&format=webp" alt="1015040" />
                                <AvatarFallback>1</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white transition-colors group-hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] group-hover:bg-clip-text group-hover:text-transparent">1015040</span>
                        </li>
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12">
                                <AvatarImage src="https://picsum.photos/seed/liitze/48/48" alt="liitze" />
                                <AvatarFallback>L</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white transition-colors group-hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] group-hover:bg-clip-text group-hover:text-transparent">liitze</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
