'use client';

import React from 'react';
import { Shield, BadgeCheck, Video, Building2, FileText, ExternalLink, Skull, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function NormativasPage() {
  const normativas = [
    {
      title: 'Normativa General',
      icon: Shield,
      content: 'Respeto absoluto hacia todos los miembros de la comunidad. No se tolerará toxicidad, acoso ni discriminación de ningún tipo.',
      link: 'https://online.pubhtml5.com/krmgz/tzwo/'
    },
    {
      title: 'Normativa Mecánicos',
      icon: Wrench,
      content: 'Regulación para los talleres, servicios de reparación, tunning y comportamiento del personal mecánico del servidor.',
      link: 'https://online.pubhtml5.com/krmgz/hugn/'
    },
    {
      title: 'Normativa Negocios/Establecimientos',
      icon: Building2,
      content: 'Regulación sobre la gestión de locales, precios, eventos públicos y comportamiento dentro de los establecimientos comerciales.',
      link: 'https://online.pubhtml5.com/krmgz/rexi/'
    },
    {
      title: 'Normativa Streamers',
      icon: Video,
      content: 'Regulación para la creación de contenido, respeto a la privacidad de otros jugadores y directrices para transmisiones en vivo.',
      link: 'https://online.pubhtml5.com/krmgz/xjzw/'
    },
    {
      title: 'Normativa LSPD',
      icon: BadgeCheck,
      content: 'Regulación, procedimientos y códigos de conducta para los miembros del departamento de policía de Los Santos.',
      link: 'https://online.pubhtml5.com/krmgz/gqzs/'
    },
    {
      title: 'Normativa Ilegales',
      icon: Skull,
      content: 'Reglas, límites y protocolos específicos para bandas, mafias y la realización de actividades delictivas en la ciudad.',
      link: 'https://online.pubhtml5.com/krmgz/cpuu/'
    }
  ];

  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          Normativa del Servidor
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Lee atentamente las reglas de NOTWEN RP para asegurar una experiencia de juego óptima para todos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-card p-6 rounded-lg border border-destructive/20 mb-8 transition-all duration-700 ease-in-out hover:rotate-[0.5deg] hover:scale-[1.01] hover:border-destructive/40 shadow-sm hover:shadow-destructive/10 cursor-default">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-destructive" />
            <h2 className="font-headline text-2xl text-white uppercase tracking-wider">Aviso Importante</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Al entrar en NOTWEN RP, aceptas cumplir todas las normativas aquí presentes. El desconocimiento de las mismas no exime de su cumplimiento. Nos reservamos el derecho de admisión para garantizar la calidad del rol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {normativas.map((norma, index) => (
            <Card key={index} className="bg-card border-border/20 p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <norma.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-headline text-xl text-white uppercase tracking-wide">{norma.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {norma.content}
              </p>
              <div className="pt-4 mt-auto">
                <a 
                  href={norma.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] text-white rounded-md text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-destructive/20"
                >
                  VER NORMATIVA
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}