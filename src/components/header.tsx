import { Gamepad2 } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="border-b border-border/50 p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-3xl tracking-wider text-white">
            GridGazer
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="font-headline text-sm uppercase tracking-widest">
            Leaderboard
          </Button>
          <Button variant="ghost" className="font-headline text-sm uppercase tracking-widest">
            Streams
          </Button>
          <Button
            variant="outline"
            className="font-headline text-sm uppercase tracking-widest border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
}
