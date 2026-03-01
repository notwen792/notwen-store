'use client';

import React from 'react';
import { UserCheck, ShieldCheck, ClipboardCheck, FileText, UserPlus, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WhitelistPage() {
  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          WHITELIST-NOTWEN
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          ¿Quieres formar parte de NOTWEN RP? Aquí tienes los pasos necesarios para superar el proceso de whitelist y empezar tu historia en la ciudad.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Pasos principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-8 rounded-lg border border-border/20 flex flex-col items-center text-center group">
            <div className="p-4 rounded-full bg-destructive/10 mb-4 group-hover:bg-destructive/20 transition-colors">
              <ShieldCheck className="h-10 w-10 text-destructive" />
            </div>
            <h3 className="font-headline text-2xl tracking-wider mb-2 text-white">PASO 1: NORMATIVA</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Es imprescindible conocer las reglas del servidor antes de realizar la entrevista. Prepárate bien.
            </p>
            <Button asChild variant="outline" className="w-full hover:bg-destructive hover:text-white transition-colors">
              <Link href="/normativas">LEER NORMATIVAS</Link>
            </Button>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border/20 flex flex-col items-center text-center group">
            <div className="p-4 rounded-full bg-destructive/10 mb-4 group-hover:bg-destructive/20 transition-colors">
              <FileText className="h-10 w-10 text-destructive" />
            </div>
            <h3 className="font-headline text-2xl tracking-wider mb-2 text-white">PASO 2: FORMULARIO</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Completa el formulario de acceso oficial para que nuestro equipo pueda revisar tu solicitud y perfil.
            </p>
            <Button asChild className="w-full bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdpm3H2lJuFcuk5sNwmjr9rGyN1icNFwtLieGlsf2GhgYw7Zw/viewform?usp=sharing&ouid=108918823333102439282" target="_blank" rel="noopener noreferrer">
                FORMULARIO
              </Link>
            </Button>
          </div>
        </div>

        {/* Nueva sección: Whitelist por Invitación */}
        <div className="bg-card p-8 rounded-lg border border-border/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <UserPlus className="h-32 w-32 text-destructive" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-destructive animate-pulse" />
              <h2 className="font-headline text-3xl text-white uppercase tracking-wider">
                ¡Trae a tus amigos al servidor! (Acceso Directo)
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ¿Tienes a alguien de confianza que quiere unirse a nuestra comunidad? ¡Ahora es más fácil que nunca! Hemos habilitado un sistema de <strong>Whitelist por Invitación</strong>.
            </p>

            <div className="bg-background/40 p-6 rounded-lg border border-border/10 space-y-4">
              <h4 className="font-headline text-xl text-destructive tracking-wide flex items-center gap-2">
                🚀 ¿Cómo funciona?
              </h4>
              <p className="text-sm text-muted-foreground">
                Si ya eres miembro oficial del servidor y tienes tu WL aprobada, puedes invitar a tus amigos para que se salten todo el proceso de entrevistas y formularios.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-3 bg-card/50 rounded border border-border/5">
                  <span className="text-destructive font-bold block mb-1">Paso 1</span>
                  <p className="text-xs text-muted-foreground">Envía el enlace de invitación a tu conocido.</p>
                </div>
                <div className="p-3 bg-card/50 rounded border border-border/5">
                  <span className="text-destructive font-bold block mb-1">Paso 2</span>
                  <p className="text-xs text-muted-foreground">Una vez dentro, verificaremos la invitación.</p>
                </div>
                <div className="p-3 bg-card/50 rounded border border-border/5">
                  <span className="text-destructive font-bold block mb-1">Paso 3</span>
                  <p className="text-xs text-muted-foreground">¡Listo! Acceso automático sin Whitelist estándar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requisitos Mínimos */}
        <div className="bg-card p-8 rounded-lg border border-border/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-destructive/10">
              <ClipboardCheck className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="font-headline text-3xl text-white uppercase tracking-wider">Requisitos Mínimos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/10">
              <div className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
              <p className="text-muted-foreground text-sm">Tener una copia original de Grand Theft Auto V.</p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/10">
              <div className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
              <p className="text-muted-foreground text-sm">Micrófono de calidad aceptable para la comunicación fluida.</p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/10">
              <div className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
              <p className="text-muted-foreground text-sm">Demostrar madurez y respeto hacia el resto de la comunidad.</p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/10">
              <div className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
              <p className="text-muted-foreground text-sm">Conocimientos básicos de conceptos de Roleplay (IC, OOC, FailRP, etc).</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-destructive/5 rounded-lg border border-destructive/10">
            <p className="text-destructive text-sm italic text-center">
              "El éxito en la whitelist no depende solo de saber las reglas, sino de demostrar que vienes a aportar un rol de calidad."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}