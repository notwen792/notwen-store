import { Button } from './ui/button';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="p-4 pr-8 flex justify-end items-center h-20 border-b border-border">
      <Button variant="outline" asChild className="text-sm uppercase hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:brightness-110 focus-visible:ring-0 animate-button-bob">
        <Link href="https://discord.gg/Z6KvkfFVts" target="_blank" rel="noopener noreferrer">
          DISCORD STORE
          <ShoppingCart className="h-5 w-5" />
        </Link>
      </Button>
    </header>
  );
}
