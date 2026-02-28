'use client';

import React from 'react';
import { Shield, AlertCircle, Scale, Users, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function NormativasPage() {
  const normativas = [
    {
      title: 'Reglas Generales',
      icon: Shield,
      content: 'Respeto absoluto hacia todos los miembros de la comunidad. No se tolerará toxicidad, acoso ni discriminación de ningún tipo.'
    },
    {
      title: 'Conceptos de Rol',
      icon: Users,
      content: 'Es obligatorio conocer y aplicar conceptos básicos como RDM, VDM, MG, PG y NJ para mantener la inmersión del servidor.'
    },
    {
      title: 'Normativa de Crímenes',
      icon: Scale,
      content: 'Los robos y actos delictivos deben seguir las limitaciones de unidades policiales disponibles y los tiempos de espera reglamentarios.'
    },
    {
      title: 'Sanciones',
      icon: AlertCircle,
      content: 'El incumplimiento de las normas resultará en advertencias, baneos temporales o permanentes dependiendo de la gravedad de la falta.'
    }
  ];

  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          Normativa del Servidor
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Lee atentamente las reglas de notwen rp para asegurar una experiencia de juego óptima para todos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-card p-6 rounded-lg border border-destructive/20 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-destructive" />
            <h2 className="font-headline text-2xl text-white uppercase tracking-wider">Aviso Importante</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Al entrar en notwen rp, aceptas cumplir todas las normativas aquí presentes. El desconocimiento de las mismas no exime de su cumplimiento. Nos reservamos el derecho de admisión para garantizar la calidad del rol.
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                {norma.content}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-card rounded-lg border border-border/10">
          <p className="text-muted-foreground mb-4">
            Para leer la normativa completa con todos los detalles técnicos, únete a nuestro Discord oficial.
          </p>
          <a 
            href="https://discord.gg/Z6KvkfFVts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-destructive text-white rounded-md font-bold hover:brightness-110 transition-all"
          >
            VER NORMATIVA COMPLETA EN DISCORD
          </a>
        </div>
      </div>
    </main>
  );
}
