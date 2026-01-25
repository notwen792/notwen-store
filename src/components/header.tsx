import { Button } from './ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="p-4 pr-8 flex justify-end items-center h-20 border-b border-border">
      <Button variant="ghost" asChild className="text-sm uppercase group hover:bg-transparent">
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <div className="text-right mr-4">
            <div className="font-semibold text-white text-xs transition-colors group-hover:bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] group-hover:bg-clip-text group-hover:text-transparent">Join Discord</div>
          </div>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5 text-white transition-colors group-hover:text-destructive">
            <title>Discord</title>
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.229a18.26 18.26 0 00-3.648 0 18.258 18.258 0 00-.608-1.229.074.074 0 00-.079-.037A19.736 19.736 0 003.683 4.37a.074.074 0 00-.034.043c-.347.785-.636 1.748-.809 2.733a.074.074 0 00.03.065c2.022 1.029 3.864 1.728 5.462 2.259a.074.074 0 00.084-.022c.462-.35.875-.724 1.229-1.109a.074.074 0 00-.022-.103c-.22-.15-.42-.287-.608-.433a.074.074 0 00-.084.022c-.15.112-.287.236-.42.36a.074.074 0 00-.022.084c.65 1.157 1.649 2.03 2.872 2.62a.074.074 0 00.084 0c1.229-.59 2.228-1.463 2.872-2.62a.074.074 0 00-.022-.084c-.133-.124-.269-.248-.42-.36a.074.074 0 00-.084-.022c-.189.146-.389.283-.608.433a.074.074 0 00-.022.103c.356.386.77.76 1.229 1.109a.074.074 0 00.084.022c1.598-.53 3.44-1.23 5.462-2.259a.074.074 0 00.03-.065c-.172-.985-.462-1.948-.809-2.733a.074.074 0 00-.034-.043zM8.02 15.33c-1.157 0-2.09-.934-2.09-2.09s.934-2.09 2.09-2.09c1.156 0 2.09.934 2.09 2.09s-.933 2.09-2.09 2.09zm7.965 0c-1.157 0-2.09-.934-2.09-2.09s.934-2.09 2.09-2.09c1.156 0 2.09.934 2.09 2.09s-.933 2.09-2.09 2.09z"/>
          </svg>
        </Link>
      </Button>
    </header>
  );
}
