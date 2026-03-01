'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { sendWhitelistToDiscord } from '@/app/actions/whitelist';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  discordName: z.string().min(2, 'Nombre de Discord es obligatorio'),
  age: z.string().min(1, 'La edad es obligatoria'),
  experience: z.string().min(10, 'Cuéntanos un poco más sobre tu experiencia'),
  reason: z.string().min(10, 'Dinos por qué quieres entrar'),
  concepts: z.string().min(10, 'Define brevemente los conceptos básicos'),
  q_restart: z.string().min(1, 'Selecciona una opción'),
  q_911: z.string().min(1, 'Selecciona una opción'),
  q_recognition: z.string().min(1, 'Selecciona una opción'),
  q_hostage: z.string().min(1, 'Selecciona una opción'),
  q_shooting: z.string().min(1, 'Selecciona una opción'),
  q_fear: z.string().min(1, 'Selecciona una opción'),
  q_mg: z.string().min(1, 'Selecciona una opción'),
  q_pg: z.string().min(1, 'Selecciona una opción'),
  q_priority: z.string().min(1, 'Selecciona una opción'),
  q_do: z.string().min(1, 'Selecciona una opción'),
  q_combat: z.string().min(1, 'Selecciona una opción'),
});

export function WhitelistForm({ onSuccess }: { onSuccess: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      discordName: '',
      age: '',
      experience: '',
      reason: '',
      concepts: '',
      q_restart: '',
      q_911: '',
      q_recognition: '',
      q_hostage: '',
      q_shooting: '',
      q_fear: '',
      q_mg: '',
      q_pg: '',
      q_priority: '',
      q_do: '',
      q_combat: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const result = await sendWhitelistToDiscord(values);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "¡Solicitud Enviada!",
        description: "Tu formulario ha sido enviado a nuestro equipo de soporte.",
      });
      onSuccess();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Hubo un problema al enviar el formulario.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
        <div className="space-y-4">
          <h3 className="font-headline text-2xl text-destructive border-b border-white/10 pb-2">Datos de Identificación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="discordName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de Discord</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Stewie#1234" {...field} className="bg-background/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Edad Real</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Tu edad" {...field} className="bg-background/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline text-2xl text-destructive border-b border-white/10 pb-2">Experiencia y Motivación</h3>
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Qué experiencia tienes en Roleplay?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Servidores anteriores, tiempo jugando..." {...field} className="bg-background/50 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Por qué quieres unirte a NOTWEN RP?</FormLabel>
                <FormControl>
                  <Textarea placeholder="¿Qué buscas en nuestra comunidad?" {...field} className="bg-background/50 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="concepts"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Definición breve: IC, OOC, MG y DM</FormLabel>
                <FormControl>
                  <Textarea placeholder="Demuestra que conoces las reglas básicas..." {...field} className="bg-background/50 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <h3 className="font-headline text-2xl text-destructive border-b border-white/10 pb-2">Test de Normativa</h3>

          <FormField
            control={form.control}
            name="q_restart"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Reinicios y roles agresivos. ¿Cuál de estas acciones NO está permitida según normativa de reinicios?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Iniciar un rol agresivo 1 hora antes del reinicio.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Iniciar un rol agresivo 10 minutos despues del reinicio</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Iniciar un rol agresivo 2 horas despues del reinicio</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Iniciar un rol agresivo 45 minutos antes del reinicio</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_911"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>¿Cuál de estos /911 (entorno) está MAL redactado según normativa?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">/911 Se verían dos sujetos con pasamontañas forcejeando...</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">/911 Se escucharían gritos y se vería a tres individuos...</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">/911 Soy Pablo y acabo de ver a Kevin atracando. Eran cinco seguro...</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">/911 Se vería a tres individuos intentando forzar una puerta...</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_recognition"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Mascara / llamada anónima (reconocimiento). ¿Cuál afirmación está MAL según normativa?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Si alguien lleva una máscara que cubre cara y pelo, lo trato como desconocido.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Si recibo una llamada en anónimo, no puedo dar por hecho quién es.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Puedo reconocer a alguien con máscara completa si lo identifico por la voz.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Puedo describir rasgos generales (altura, ropa) sin decir quién es.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_hostage"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Rehenes (tiempos, acuerdos y PK). ¿Cuál afirmación está MAL según normativa?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Prohibido utilizar a un amigo como rehén.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">No se puede retener a una persona más de 40 minutos sin acuerdo.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">En una negociación con intercambio, el rol puede exceder el tiempo.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Si se rompen las negociaciones, se puede hacer PK al rehén aunque colabore.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_shooting"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>En una persecución en vehículo, decides usar un arma. ¿Qué opción es CORRECTA?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Solo disparar a carrocería/ruedas; para abatir personas debes bajarte.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Disparar a ocupantes si el otro vehículo va armado.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Disparar a ocupantes si te cierran el paso sin rol previo.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Iniciar rol agresivo disparando desde el coche enviando un /911.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_fear"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Valoración de vida (Fear RP). Te apuntan 3 personas y estás solo y desarmado. ¿Qué haces?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Saco mi arma rápido y trato de matarlos.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Salgo corriendo haciendo zigzag.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Levanto las manos y sigo sus instrucciones valorando mi vida.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Insulto por OOC porque es un rol sucio.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_mg"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>MetaGaming (MG). Ves en stream que atracan a tu amigo en un callejón. ¿Qué haces?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Voy rápidamente con mi coche porque sé dónde está.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Llamo a la policía dando la ubicación exacta del stream.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">No hago nada IC, mi personaje no lo sabe.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Le mando un mensaje por Discord diciendo que voy.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_pg"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>PowerGaming (PG). Tienes un accidente fuerte volcando varias veces. ¿Qué haces?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Uso /flip, reparo y sigo la persecución.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Roleo las heridas y estado del vehículo esperando emergencias.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Me bajo y salgo corriendo porque tengo prisa.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Digo que no me ha pasado nada y sigo conduciendo.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_priority"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>En un atraco a un establecimiento con rehén, ¿qué tiene PRIORIDAD absoluta?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Asegurar el botín y el dinero robado.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Abatir a los policías si intentan entrar.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Salvaguardar la vida del rehén en todo momento.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Conseguir la huida lo más rápido posible sin negociar.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_do"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>¿Cuál es el uso correcto del comando /do?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Para insultar o quejarme de un rol por OOC.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Para describir acciones físicas de mi propio personaje.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Para describir el entorno o situaciones no visibles a simple vista.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Para hablar con mis amigos fuera de rol sin que nadie lea.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q_combat"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Te detiene la policía y "se te cae" el internet. ¿Qué debes hacer?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Nada, aprovecho que ya me he librado de la cárcel.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Avisar por Discord lo antes posible y volver para retomar el rol.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Esperar a mañana para entrar con otro personaje.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Borrar mi personaje para que no me fichen.</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 shadow-lg shadow-destructive/20 text-lg font-bold"
        >
          {isLoading ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> ENVIANDO SOLICITUD...</>
          ) : (
            <><Send className="mr-2 h-5 w-5" /> ENVIAR FORMULARIO DE WHITELIST</>
          )}
        </Button>
      </form>
    </Form>
  );
}
