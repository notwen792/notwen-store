export default function InstallationGuidePage() {
  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          Guía de Instalación
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Sigue estos pasos para instalar nuestros scripts en tu servidor.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg border border-border/20 text-white">
        <h2 className="font-headline text-3xl tracking-wider mb-6">Pasos a seguir</h2>
        <div className="space-y-6 text-muted-foreground">
            <div>
                <h3 className="font-semibold text-lg text-white mb-2">1. Descarga el archivo</h3>
                <p>Una vez completada la compra, recibirás un enlace para descargar un archivo .zip que contiene el script.</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-white mb-2">2. Descomprime el contenido</h3>
                <p>Extrae el contenido del archivo .zip en una carpeta de tu elección. Dentro encontrarás una carpeta con el nombre del script.</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-white mb-2">3. Mueve la carpeta del script</h3>
                <p>Copia la carpeta del script y pégala dentro del directorio <code className="bg-background/50 px-2 py-1 rounded">resources</code> de tu servidor FiveM.</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-white mb-2">4. Edita el archivo de configuración</h3>
                <p>Abre el archivo de configuración de tu servidor (normalmente <code className="bg-background/50 px-2 py-1 rounded">server.cfg</code>) y añade la siguiente línea, reemplazando <code className="bg-background/50 px-2 py-1 rounded">[script_name]</code> con el nombre de la carpeta del script:</p>
                <pre className="bg-background/50 p-4 rounded-md mt-2 text-white"><code>ensure [script_name]</code></pre>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-white mb-2">5. Reinicia el servidor</h3>
                <p>Guarda los cambios en el archivo de configuración y reinicia tu servidor de FiveM para que los cambios surtan efecto.</p>
            </div>
             <div>
                <h3 className="font-semibold text-lg text-white mb-2">¿Necesitas ayuda?</h3>
                <p>Si encuentras algún problema durante la instalación, no dudes en contactarnos a través de nuestro servidor de Discord. ¡Estamos para ayudarte!</p>
            </div>
        </div>
      </div>
    </main>
  );
}
