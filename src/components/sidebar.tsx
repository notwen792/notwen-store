import { Home, Map, Package, Quote, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

export function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-card flex-col p-6 border-r border-border hidden md:flex">
      <div className="mb-12">
        <h1 className="font-headline text-5xl text-white">ORIGEN</h1>
        <p className="font-headline text-2xl text-primary tracking-[0.2em]">
          &bull;STORE&bull;
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        <Button variant="ghost" className="justify-start gap-3 h-12 text-base text-muted-foreground hover:text-white">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Button>
        <Button variant="secondary" className="justify-start gap-3 h-12 text-base font-semibold text-primary border border-primary bg-transparent hover:bg-primary/10">
          <ShoppingCart className="h-5 w-5" />
          <span>Scripts</span>
        </Button>
        <Button variant="ghost" className="justify-start gap-3 h-12 text-base text-muted-foreground hover:text-white">
          <Map className="h-5 w-5" />
          <span>Maps</span>
        </Button>
        <Button variant="ghost" className="justify-start gap-3 h-12 text-base text-muted-foreground hover:text-white">
          <Package className="h-5 w-5" />
          <span>Packs</span>
        </Button>
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
            At Origen Network we are committed to providing the best possible experience for our customers.
          </p>
          <p className="text-muted-foreground text-xs mt-2 pl-6">
            If you need help or have questions about our scripts or mapping for GTA V, please contact us on our Discord server or via email. Our support team is available 24 hours a day to help you. We are here to make sure you have a smooth and exciting gaming experience.
          </p>
        </div>
      </div>
    </aside>
  );
}
