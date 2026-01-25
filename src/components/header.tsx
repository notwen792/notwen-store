import { Button } from './ui/button';
import { LogIn } from 'lucide-react';

export function Header() {
  return (
    <header className="p-4 pr-8 flex justify-end items-center h-20 border-b border-border">
      <Button variant="ghost" className="text-sm uppercase">
        <div className="text-right mr-4">
          <div className="font-semibold text-white text-xs">Sign In</div>
          <div className="text-xs text-muted-foreground">Connect your account</div>
        </div>
        <LogIn className="h-5 w-5 text-white" />
      </Button>
    </header>
  );
}
