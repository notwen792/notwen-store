'use client';

import { Home, Instagram, Package, Quote, Share2, ShoppingCart } from 'lucide-react';
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
        <p className="font-headline text-2xl uppercase tracking-widest -mt-2 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] bg-clip-text text-transparent">
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
          navItems.map((item) => (
            <div key={item.label} className="h-12 w-full rounded-md bg-transparent" />
          ))
        )}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <div className="bg-background/50 rounded-lg p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-white">
            <Share2 className="h-4 w-4" /> REDES SOCIALES
          </p>
          <div className="flex items-center gap-4 mt-4 pl-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5"><title>Discord</title><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.229a18.26 18.26 0 00-3.648 0 18.258 18.258 0 00-.608-1.229.074.074 0 00-.079-.037A19.736 19.736 0 003.683 4.37a.074.074 0 00-.034.043c-.347.785-.636 1.748-.809 2.733a.074.074 0 00.03.065c2.022 1.029 3.864 1.728 5.462 2.259a.074.074 0 00.084-.022c.462-.35.875-.724 1.229-1.109a.074.074 0 00-.022-.103c-.22-.15-.42-.287-.608-.433a.074.074 0 00-.084.022c-.15.112-.287.236-.42.36a.074.074 0 00-.022.084c.65 1.157 1.649 2.03 2.872 2.62a.074.074 0 00.084 0c1.229-.59 2.228-1.463 2.872-2.62a.074.074 0 00-.022-.084c-.133-.124-.269-.248-.42-.36a.074.074 0 00-.084-.022c-.189.146-.389.283-.608.433a.074.074 0 00-.022.103c.356.386.77.76 1.229 1.109a.074.074 0 00.084.022c1.598-.53 3.44-1.23 5.462-2.259a.074.074 0 00.03-.065c-.172-.985-.462-1.948-.809-2.733a.074.074 0 00-.034-.043zM8.02 15.33c-1.157 0-2.09-.934-2.09-2.09s.934-2.09 2.09-2.09c1.156 0 2.09.934 2.09 2.09s-.933 2.09-2.09 2.09zm7.965 0c-1.157 0-2.09-.934-2.09-2.09s.934-2.09 2.09-2.09c1.156 0 2.09.934 2.09 2.09s-.933 2.09-2.09 2.09z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.28 1.7.03 1.31-.01 2.62-.02 3.93-.02.13-.02.22-.04.33-.43 1.55-1.14 3.03-2.13 4.35-1.02 1.35-2.33 2.48-3.88 3.32-1.57.86-3.33 1.4-5.18 1.55-1.88.16-3.76-.02-5.59-.51-1.86-.5-3.6-1.32-5.11-2.41-1.53-1.11-2.78-2.49-3.72-4.11-.92-1.6-1.5-3.41-1.69-5.29-.18-1.83.02-3.68.5-5.46.48-1.78 1.28-3.48 2.38-5.02 1.09-1.52 2.45-2.82 4.04-3.83 1.62-1.02 3.42-1.73 5.3-2.12 1.86-.38 3.75-.42 5.63-.12zM10.82 5.49c.82.02 1.63-.01 2.45-.02.02.18.01.36.01.54-.01 1.27-.11 2.54-.31 3.79-.19 1.25-.49 2.47-.88 3.65-.38 1.18-.89 2.3-1.5 3.34-.61 1.04-1.33 2-2.14 2.87-1.63 1.73-3.87 2.83-6.35 3.01-.02-.02-.02-.02-.01-.04.28-1.58.89-3.11 1.8-4.52.88-1.37 1.99-2.62 3.26-3.71 1.28-1.11 2.69-2.09 4.19-2.92.02-.13.02-.27.01-.41-.01-.39.01-.78-.01-1.16-.14-.02-.28-.02-.42-.02-1.09.01-2.18.03-3.27.02-.1-.01-.2-.02-.3-.04-.03-.01 0-.02.01-.02z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="bg-background/50 rounded-lg p-4 text-sm">
          <p className="flex items-center gap-2 font-semibold text-white">
            <Quote className="h-4 w-4 transform -scale-x-100 fill-white" /> DOCUMENTATION
          </p>
          <a href="#" className="text-destructive hover:underline text-xs mt-2 block pl-6">
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
