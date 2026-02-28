import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, MessageSquare, BookOpen, CheckCircle, Play, Instagram, Share2 } from 'lucide-react';
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
                <Image src={image.imageUrl} alt="notwen rp background" fill className="opacity-20 object-cover" data-ai-hint={image.imageHint} />
            </div>
        }
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="font-headline text-6xl md:text-8xl uppercase tracking-widest text-white">
                notwen rp
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Bienvenidos a nuestra comunidad notwen rp, un servidor de roleplay creado por entusiastas con la ambición de crecer.
            </p>
            <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all duration-300">
                <Link href="https://discord.gg/Z6KvkfFVts" target="_blank" rel="noopener noreferrer">
                    Únete al servidor
                    <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl text-white tracking-wider uppercase">Sobre Nuestro Servidor</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Descubre lo que hace de notwen rp una experiencia de roleplay única.
                </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border/20 text-white">
                <h3 className="font-headline text-3xl tracking-wider mb-6 text-destructive">Bienvenidos a Los Santos</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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

            <div className="bg-card p-8 rounded-lg border border-border/20 text-white">
                <h3 className="font-headline text-3xl tracking-wider mb-6 text-destructive">¿Cómo entrar?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10">
                        <MessageSquare className="h-6 w-6 text-destructive shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">1. Únete al Discord</h4>
                            <p className="text-sm text-muted-foreground">El primer paso es entrar en nuestra comunidad oficial para estar al tanto de todo.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10">
                        <BookOpen className="h-6 w-6 text-destructive shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">2. Lee la Normativa</h4>
                            <p className="text-sm text-muted-foreground">Es fundamental conocer las reglas para asegurar una buena convivencia y un rol de calidad.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10">
                        <CheckCircle className="h-6 w-6 text-destructive shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">3. Pasa la Whitelist</h4>
                            <p className="text-sm text-muted-foreground">Realiza una pequeña entrevista con nuestro equipo de soporte para validar tu perfil.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10">
                        <Play className="h-6 w-6 text-destructive shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">4. ¡A Rolear!</h4>
                            <p className="text-sm text-muted-foreground">Una vez aprobado, solo tienes que conectarte a la IP del servidor y empezar tu historia.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border/20 text-center">
                    <p className="text-muted-foreground italic">
                        ¿Tienes dudas? Nuestro equipo de soporte está disponible 24/7 en Discord para ayudarte en cada paso.
                    </p>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border/20 text-white">
                <h3 className="font-headline text-3xl tracking-wider mb-6 text-destructive">Nuestras Redes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="#" className="flex items-center gap-4 p-4 rounded-lg bg-background/40 border border-border/10 hover:bg-background/60 transition-all duration-300 group">
                        <div className="p-3 rounded-full bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                            <Instagram className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-1">Instagram</h4>
                            <p className="text-sm text-muted-foreground">Siguenos para no perderte ninguna foto o novedad.</p>
                        </div>
                    </Link>
                    <Link href="#" className="flex items-center gap-4 p-4 rounded-lg bg-background/40 border border-border/10 hover:bg-background/60 transition-all duration-300 group">
                        <div className="p-3 rounded-full bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                            <Share2 className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-1">TikTok</h4>
                            <p className="text-sm text-muted-foreground">Mira los mejores clips y momentos del servidor.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}