import { Header } from '@/components/header';
import { ProfileCard } from '@/components/profile-card';
import { userProfiles } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-10">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-widest text-white">
            Community Profiles
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Browse our vibrant community of gamers. Find your rivals and future teammates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {userProfiles.map((user) => (
            <ProfileCard key={user.id} user={user} />
          ))}
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm border-t border-border/50">
        <p>&copy; {new Date().getFullYear()} GridGazer. All rights reserved.</p>
      </footer>
    </div>
  );
}
