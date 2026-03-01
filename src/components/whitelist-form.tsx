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
                      <FormLabel className="font-normal">/911 Se verían dos sujetos con pasamontañas forcejeando con un hombre junto a una tienda 24/7...</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">/911 Se escucharían gritos y se vería a tres individuos empujando a una persona hacia una furgoneta blanca...</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">/911 Soy Pablo y acabo de ver a Kevin atracando. Eran cinco seguro (aunque no lo he visto bien)...</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">/911 Se vería a tres individuos intentando forzar una puerta trasera de una joyería...</FormLabel>
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
                      <FormLabel className="font-normal">Si alguien lleva una máscara que cubre cara y pelo, lo trato como desconocido y no afirmo su identidad.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Si recibo una llamada en anónimo, no puedo dar por hecho quién es; continúo el rol sin identificar.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Puedo reconocer a alguien con máscara completa si lo identifico por la voz, aunque me llame en anónimo.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Puedo describir rasgos generales (altura aproximada, ropa, vehículo), sin decir quién es.</FormLabel>
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
                      <FormLabel className="font-normal">Está completamente prohibido utilizar a un amigo como rehén para un intercambio con la policía.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">No se puede retener a una persona más de 40 minutos sin su acuerdo.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">En una negociación donde se está pidiendo dinero u objeto a cambio del rehén, el rol puede exceder el tiempo estipulado.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Si las negociaciones se rompen durante un robo con rehén, no se puede hacer PK al rehén si ha colaborado.</FormLabel>
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
                <FormLabel>En una persecución, vas dentro de un vehículo en marcha y decides usar un arma. ¿Qué opción es la correcta según normativa?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="1" /></FormControl>
                      <FormLabel className="font-normal">Desde un vehículo en marcha solo puedes disparar a la carrocería o a las ruedas del otro vehículo; si quieres abatir a una persona, debes bajarte del vehículo antes.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="2" /></FormControl>
                      <FormLabel className="font-normal">Puedes disparar desde el vehículo en marcha a los ocupantes (incluido el conductor) si el otro vehículo también va armado.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="3" /></FormControl>
                      <FormLabel className="font-normal">Puedes disparar desde el vehículo en marcha a los ocupantes si te están cerrando el paso, aunque no haya un rol agresivo previo.</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="4" /></FormControl>
                      <FormLabel className="font-normal">Puedes iniciar el rol agresivo disparando desde el vehículo en marcha, siempre que después envíes un /911 (entorno).</FormLabel>
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