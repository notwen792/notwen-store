'use client';

import { ArrowRight, Terminal, Gamepad2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

export default function Home() {
  return (
    <main className="flex-grow bg-background text-white">
      {/* Hero Section - Sin imagen de fondo para evitar parpadeos */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center p-8 bg-card/10">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="font-headline text-6xl md:text-8xl uppercase tracking-widest">
                NOTWEN
            </h1>
            <p className="text-4xl md:text-6xl font-headline uppercase bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] bg-clip-text text-transparent -mt-2">
                RP
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Bienvenidos a NOTWEN RP, la mejor experiencia en rol. Calidad y realismo en cada detalle.
            </p>
            <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all duration-300">
                <Link href="/scripts">
                    Explore Negocios
                    <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
                <div className="text-center md:text-left mb-12">
                    <h2 className="font-headline text-4xl text-white tracking-wider">¿Qué es NOTWEN?</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto md:mx-0">
                      Somos tu destino especializado en activos de alta calidad y una comunidad de roleplay única actualmente en pleno desarrollo. Ofrecemos soluciones profesionales para elevar tu servidor al siguiente nivel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card p-8 rounded-lg border border-border/20">
                        <Terminal className="h-10 w-10 text-destructive mb-4" />
                        <h3 className="font-headline text-2xl tracking-wider mb-2">NEGOCIOS UNICOS</h3>
                        <p className="text-muted-foreground text-sm">aqui veras nuestros activos echos y rediseños por el programador stewiexox</p>
                    </div>
                    <div className="bg-card p-8 rounded-lg border border-border/20">
                        <Gamepad2 className="h-10 w-10 text-destructive mb-4" />
                        <h3 className="font-headline text-2xl tracking-wider mb-2">NOTWEN RP</h3>
                        <p className="text-muted-foreground text-sm">bienvenidos a nuestra comunidad NOTWEN RP un servidor de roleplay creados por unos randoms que les apetecia y estan intentando crecer</p>
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
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12 border border-border/50">
                                <AvatarImage src="https://cdn.discordapp.com/avatars/276744327198277633/8e80e75a28f7c311e7d4203d74873d37.webp?size=1024" alt="stewiexox" />
                                <AvatarFallback>S</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white transition-colors group-hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] group-hover:bg-clip-text group-hover:text-transparent">stewiexox</span>
                        </li>
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12 border border-border/50">
                                <AvatarImage src="https://cdn.discordapp.com/avatars/793861769604759594/ddcfe57cbf4e1f696ab90c469dbabf45.webp?size=1024" alt="1015040" />
                                <AvatarFallback>1</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white transition-colors group-hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] group-hover:bg-clip-text group-hover:text-transparent">1015040</span>
                        </li>
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12 border border-border/50">
                                <AvatarImage src="https://cdn.discordapp.com/avatars/185887622223233024/e75a2fb4f137ea2af97ba697755ec674.webp?size=1024" alt="liitze" />
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
