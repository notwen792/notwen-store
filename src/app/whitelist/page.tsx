'use client';

import React from 'react';
import { UserCheck, ShieldCheck, ClipboardCheck, MessageSquare } from 'lucide-react';
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
          ¿Quieres formar parte de notwen rp? Aquí tienes los pasos necesarios para superar el proceso de whitelist y empezar tu historia en la ciudad.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-8 rounded-lg border border-border/20 flex flex-col items-center text-center group hover:border-destructive/50 transition-all duration-300">
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

          <div className="bg-card p-8 rounded-lg border border-border/20 flex flex-col items-center text-center group hover:border-destructive/50 transition-all duration-300">
            <div className="p-4 rounded-full bg-destructive/10 mb-4 group-hover:bg-destructive/20 transition-colors">
              <MessageSquare className="h-10 w-10 text-destructive" />
            </div>
            <h3 className="font-headline text-2xl tracking-wider mb-2 text-white">PASO 2: ENTREVISTA</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Únete a nuestro Discord oficial y solicita tu entrevista en el canal de soporte correspondiente.
            </p>
            <Button asChild className="w-full bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 transition-all">
              <Link href="https://discord.gg/Z6KvkfFVts" target="_blank" rel="noopener noreferrer">
                IR AL DISCORD
              </Link>
            </Button>
          </div>
        </div>

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
