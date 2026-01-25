import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotwenRpPage() {
  const image = PlaceHolderImages.find((img) => img.id === 'product2');

  return (
    <main className="flex-grow bg-background text-white">
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center p-8">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        {image &&
            <div className="absolute inset-0">
                <Image src={image.imageUrl} alt="notwen rp background" fill style={{ objectFit: 'cover' }} className="opacity-20" data-ai-hint={image.imageHint} />
            </div>
        }
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="font-headline text-6xl md:text-8xl uppercase tracking-widest">
                notwen rp
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Bienvenidos a nuestra comunidad notwen rp, un servidor de roleplay creado por entusiastas con la ambición de crecer.
            </p>
            <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all duration-300">
                <Link href="#">
                    Únete al servidor
                    <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl text-white tracking-wider">Sobre Nuestro Servidor</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Descubre lo que hace de notwen rp una experiencia de roleplay única.
                </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border/20 text-white">
                <h3 className="font-headline text-3xl tracking-wider mb-6">Bienvenidos a Los Santos</h3>
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        notwen rp es un servidor de roleplay de Grand Theft Auto V donde puedes vivir una nueva vida. Ya sea que quieras ser un ciudadano respetuoso de la ley, un criminal astuto o cualquier cosa intermedia, nuestro servidor te proporciona la plataforma para crear tu propia historia.
                    </p>
                    <p>
                        Nuestro servidor está construido sobre un marco personalizado con scripts y características únicas para garantizar una experiencia inmersiva y atractiva. Tenemos un equipo de desarrollo activo que trabaja constantemente en nuevas actualizaciones y escucha los comentarios de la comunidad.
                    </p>
                    <p>
                        Únete a nuestra comunidad en Discord para comenzar, leer las reglas de nuestro servidor y conectarte con otros jugadores. ¡Esperamos verte en Los Santos!
                    </p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
