'use client';

import { ArrowRight, MessageSquare, BookOpen, CheckCircle, Play, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <main className="flex-grow bg-background text-white">
      {/* Hero Section - Estilo NOTWEN RP */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center p-8 bg-card/20 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="font-headline text-7xl md:text-9xl uppercase tracking-widest text-white animate-title-float select-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-destructive/20 drop-shadow-sm">
                  NOTWEN RP
                </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Bienvenidos a NOTWEN RP, la mejor experiencia en rol. Calidad y realismo en cada detalle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all duration-300 shadow-xl shadow-destructive/20 hover:scale-105 active:scale-95">
                  <Link href="https://discord.gg/Z6KvkfFVts" target="_blank" rel="noopener noreferrer">
                      Únete al servidor
                      <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all duration-300 shadow-xl shadow-destructive/20 hover:scale-105 active:scale-95">
                  <Link href="/scripts">
                      Explorar Negocios
                  </Link>
              </Button>
            </div>
        </div>
      </section>

      <section className="p-8 md:p-12">
        <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl text-white tracking-wider uppercase">Sobre Nuestro Servidor</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Descubre lo que hace de NOTWEN RP una experiencia de roleplay única y profesional.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-card p-8 rounded-lg border border-border/20 text-white transition-all duration-700 ease-in-out hover:rotate-[0.3deg] hover:scale-[1.005] hover:border-destructive/30 shadow-sm hover:shadow-destructive/5 cursor-default">
                    <h3 className="font-headline text-3xl tracking-wider mb-6 text-destructive">¿Quiénes somos?</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            NOTWEN RP es un servidor de Grand Theft Auto V enfocado en el roleplay serio, donde puedes vivir una nueva vida. Ya sea que quieras ser un ciudadano ejemplar, un criminal astuto o cualquier cosa intermedia, nuestro servidor proporciona la plataforma para crear tu propia historia.
                        </p>
                        <p>
                            Nuestro servidor está construido sobre un framework personalizado con scripts y características únicas para asegurar una experiencia inmersiva y atractiva. Tenemos un equipo de desarrollo activo trabajando constantemente en nuevas actualizaciones.
                        </p>
                        <p>
                            Únete a nuestra comunidad de Discord para empezar, leer las normas del servidor y conectar con otros jugadores. ¡Te esperamos en Los Santos!
                        </p>
                    </div>
                </div>
                
                <div className="lg:col-span-1 bg-card p-8 rounded-lg border border-border/20 text-white">
                    <h3 className="font-headline text-2xl tracking-wider mb-6 text-destructive flex items-center justify-center gap-2">
                        <ShieldCheck className="h-7 w-7" />
                        Administradores
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12 border border-border/50">
                                <AvatarImage src="https://cdn.discordapp.com/avatars/276744327198277633/8e80e75a28f7c311e7d4203d74873d37.webp?size=1024" alt="stewiexox" />
                                <AvatarFallback>S</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white">stewiexox</span>
                        </li>
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12 border border-border/50">
                                <AvatarImage src="https://cdn.discordapp.com/avatars/793861769604759594/ddcfe57cbf4e1f696ab90c469dbabf45.webp?size=1024" alt="1015040" />
                                <AvatarFallback>1</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white">1015040</span>
                        </li>
                        <li className="flex items-center gap-4 bg-background/50 p-3 rounded-lg group transition-colors hover:bg-background/80">
                            <Avatar className="transition-transform duration-300 group-hover:rotate-12 border border-border/50">
                                <AvatarImage src="https://cdn.discordapp.com/avatars/185887622223233024/e75a2fb4f137ea2af97ba697755ec674.webp?size=1024" alt="liitze" />
                                <AvatarFallback>L</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-white">liitze</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border/20 text-white transition-all duration-700 ease-in-out hover:rotate-[-0.3deg] hover:scale-[1.005] hover:border-destructive/30 shadow-sm hover:shadow-destructive/5 cursor-default">
                <h3 className="font-headline text-3xl tracking-wider mb-6 text-destructive">¿Cómo entrar?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="https://discord.gg/Z6KvkfFVts" target="_blank" rel="noopener noreferrer" className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10 hover:bg-destructive/10 hover:border-destructive/30 transition-all group">
                        <MessageSquare className="h-6 w-6 text-destructive shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="font-bold text-white mb-1">1. Únete al Discord</h4>
                            <p className="text-sm text-muted-foreground">El primer paso es entrar en nuestra comunidad oficial para estar al tanto de todo.</p>
                        </div>
                    </Link>
                    <Link href="/normativas" className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10 hover:bg-destructive/10 hover:border-destructive/30 transition-all group">
                        <BookOpen className="h-6 w-6 text-destructive shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="font-bold text-white mb-1">2. Lee la Normativa</h4>
                            <p className="text-sm text-muted-foreground">Es fundamental conocer las reglas para asegurar una buena convivencia y un rol de calidad.</p>
                        </div>
                    </Link>
                    <Link href="/whitelist" className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10 hover:bg-destructive/10 hover:border-destructive/30 transition-all group">
                        <CheckCircle className="h-6 w-6 text-destructive shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="font-bold text-white mb-1">3. Pasa la Whitelist</h4>
                            <p className="text-sm text-muted-foreground">Realiza una pequeña entrevista con nuestro equipo de soporte para validar tu perfil.</p>
                        </div>
                    </Link>
                    <Link href="fivem://connect/cfx.re/join/6abmzj" className="flex gap-4 p-4 rounded-lg bg-background/40 border border-border/10 hover:bg-chart-2/10 hover:border-chart-2/30 transition-all group border-l-4 border-l-chart-2">
                        <Play className="h-6 w-6 text-chart-2 shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h4 className="font-bold text-white mb-1">4. ¡A Rolear! (Conexión Directa)</h4>
                            <p className="text-sm text-muted-foreground">Una vez aprobado, solo tienes que conectarte a la IP del servidor y empezar tu historia.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
