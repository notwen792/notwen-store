'use client';

import { Home, Package, ShoppingCart, BookText, Server, Shield, Gem, UserCheck } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  Home,
  ShoppingCart,
  Package,
  Server,
  BookText,
  Shield,
  Gem,
  UserCheck,
};

export function Sidebar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { href: '/', icon: 'Server', label: 'NOTWEN RP' },
    { href: '/whitelist', icon: 'UserCheck', label: 'WHITELIST' },
    { href: '/normativas', icon: 'Shield', label: 'NORMATIVAS' },
    { href: '/scripts', icon: 'ShoppingCart', label: 'NEGOCIOS/POSTULACIONES' },
    { href: '/vip', icon: 'Gem', label: 'VIP' },
    { href: '/packs', icon: 'Package', label: 'PACKS' },
    { href: '/installation-guide', icon: 'BookText', label: 'GUÍA DE INSTALACIÓN' },
  ];

  return (
    <aside className="w-72 min-h-screen bg-card flex-col p-6 border-r border-border hidden md:flex">
      <Link 
        href="/" 
        className={cn(
          "mb-12 flex flex-col items-center", 
          isMounted && "animate-logo-pulse"
        )}
      >
        <h1 className="font-headline text-5xl text-white">NOTWEN</h1>
        <p className="font-headline text-2xl uppercase tracking-widest -mt-2 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] bg-clip-text text-transparent">
          RP
        </p>
      </Link>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              'justify-start gap-3 h-12 text-base group',
              pathname === item.href
                ? 'font-semibold text-white bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] transition-all duration-300 hover:brightness-110'
                : 'text-muted-foreground hover:text-white hover:bg-white/5'
            )}
            asChild
          >
            <Link
              href={item.href}
            >
              <Icon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]" />
              <span>{item.label}</span>
            </Link>
          </Button>
        )})}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <div className="bg-background/50 rounded-lg p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-white uppercase">
            <BookText className="h-4 w-4" /> TE AYUDAMOS EN LO QUE NECESITES
          </p>
          <p className="text-muted-foreground text-xs mt-2 pl-6 uppercase">
            EN LA RED NOTWEN RP ESTAMOS COMPROMETIDOS A BRINDAR LA MEJOR EXPERIENCIA POSIBLE A NUESTROS CLIENTES.
          </p>
          <p className="text-muted-foreground text-xs mt-2 pl-6 uppercase">
            SI NECESITAS AYUDA O TIENES PREGUNTAS SOBRE NUESTROS SCRIPTS O MAPEOS PARA GTA V, CONTÁCTANOS EN NUESTRO SERVIDOR DE DISCORD. NUESTRO EQUIPO DE SOPORTE ESTÁ DISPONIBLE LAS 24 HORAS DEL DÍA.
          </p>
        </div>
      </div>
    </aside>
  );
}
