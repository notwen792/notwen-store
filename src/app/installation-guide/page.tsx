import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { products } from '@/lib/data';

export default function InstallationGuidePage() {
  const scriptProducts = products.filter(p => p.category === 'Scripts');

  const genericSteps = [
      'Download the script files from the link provided after purchase.',
      'Unzip the downloaded folder.',
      'Copy the script folder into your server\'s `resources` directory.',
      'Add `ensure [script_name]` to your `server.cfg` file, replacing `[script_name]` with the name of the script folder.',
      'Configure the script via the `config.lua` file (if applicable).',
      'If there is a SQL file, import it into your database.',
      'Restart your server.',
      'If you have any problems, do not hesitate to contact us on our Discord server.'
  ];


  return (
    <main className="flex-grow p-8 md:p-12 bg-background">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl uppercase tracking-wider text-white">
          Guía de Instalación
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Encuentra las guías de instalación para cada uno de nuestros scripts.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg border border-border/20 text-white">
        <h2 className="font-headline text-3xl tracking-wider mb-6">Instalación por Script</h2>
        <Accordion type="single" collapsible className="w-full">
          {scriptProducts.map((script, index) => (
            <AccordionItem value={`item-${index + 1}`} key={script.id}>
              <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline hover:text-destructive transition-colors">
                {script.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-muted-foreground pt-4 pl-4 border-l-2 border-destructive ml-2">
                  {genericSteps.map((step, stepIndex) => (
                     <p key={stepIndex}>
                        <span className="font-bold text-white mr-2">{stepIndex + 1}.</span>
                        {step.includes('[script_name]') ? step.replace('[script_name]', 'the_script_folder_name') : step}
                     </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}