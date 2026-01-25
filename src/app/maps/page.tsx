export default function MapsPage() {
  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          Our Maps
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Explore our library of custom maps.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <p className="col-span-full text-center text-muted-foreground">No maps available at the moment.</p>
      </div>
    </main>
  );
}
