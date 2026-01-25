'use client';

import { Home, Package, Quote, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/scripts', icon: ShoppingCart, label: 'Scripts' },
    { href: '/packs', icon: Package, label: 'Packs' },
  ];

  return (
    <aside className="w-72 min-h-screen bg-card flex-col p-6 border-r border-border hidden md:flex">
      <Link href="/" className="mb-12 flex flex-col items-center">
        <h1 className="font-headline text-5xl text-white">notwen</h1>
        <p className="font-headline text-2xl text-primary uppercase tracking-widest -mt-2">
          Store
        </p>
      </Link>

      <nav className="flex flex-col gap-2">
        {isClient ? (
          navItems.map((item) => (
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
              <Link href={item.href}>
                <item.icon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:rotate-[15deg]" />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))
        ) : (
          <>
            <div className="h-12 w-full rounded-md bg-transparent" />
            <div className="h-12 w-full rounded-md bg-transparent" />
            <div className="h-12 w-full rounded-md bg-transparent" />
          </>
        )}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <div className="bg-background/50 rounded-lg p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-white">
            <Quote className="h-4 w-4 transform -scale-x-100 fill-white" /> DOCUMENTATION
          </p>
          <a href="#" className="text-primary hover:underline text-xs mt-2 block pl-6">
            Access our new website documentation!
          </a>
        </div>
        <div className="bg-background/50 rounded-lg p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-white">
            <Quote className="h-4 w-4 transform -scale-x-100 fill-white" /> WE HELP YOU IN WHAT YOU NEED
          </p>
          <p className="text-muted-foreground text-xs mt-2 pl-6">
            At notwen Network we are committed to providing the best possible experience for our customers.
          </p>
          <p className="text-muted-foreground text-xs mt-2 pl-6">
            If you need help or have questions about our scripts or mapping for GTA V, please contact us on our Discord server or via email. Our support team is available 24 hours a day to help you. We are here to make sure you have a smooth and exciting gaming experience.
          </p>
        </div>
      </div>
    </aside>
  );
}
