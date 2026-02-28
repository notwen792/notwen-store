'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { useEffect, useRef } from 'react';

export function LayoutClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInstallationGuide = pathname === '/installation-guide';
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Inicializamos el sonido de la pompa
    audioRef.current = new Audio('https://www.soundjay.com/misc/sounds/pop-1.mp3');
    audioRef.current.volume = 0.15; // Volumen suave para que no sea molesto

    const playPopSound = () => {
      if (audioRef.current) {
        // Reiniciamos el audio para que pueda sonar en clics rápidos
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
          // Ignoramos errores si el navegador bloquea el audio (raro en eventos de clic)
        });
      }
    };

    // Añadimos el listener global
    window.addEventListener('click', playPopSound);

    return () => {
      window.removeEventListener('click', playPopSound);
    };
  }, []);

  if (isInstallationGuide) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
