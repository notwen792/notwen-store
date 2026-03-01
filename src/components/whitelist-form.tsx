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
import { sendWhitelistToDiscord } from '@/app/actions/whitelist';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  discordName: z.string().min(2, 'Nombre de Discord es obligatorio'),
  age: z.string().min(1, 'La edad es obligatoria'),
  experience: z.string().min(10, 'Cuéntanos un poco más sobre tu experiencia'),
  reason: z.string().min(10, 'Dinos por qué quieres entrar'),
  concepts: z.string().min(10, 'Define brevemente los conceptos básicos'),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 overflow-y-auto max-h-[70vh]">
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

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Qué experiencia tienes en Roleplay?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Servidores anteriores, tiempo jugando..." 
                  {...field} 
                  className="bg-background/50 min-h-[80px]"
                />
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
                <Textarea 
                  placeholder="¿Qué buscas en nuestra comunidad?" 
                  {...field} 
                  className="bg-background/50 min-h-[80px]"
                />
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
                <Textarea 
                  placeholder="Demuestra que conoces las reglas básicas..." 
                  {...field} 
                  className="bg-background/50 min-h-[80px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110"
        >
          {isLoading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> ENVIANDO...</>
          ) : (
            <><Send className="mr-2 h-4 w-4" /> ENVIAR SOLICITUD</>
          )}
        </Button>
      </form>
    </Form>
  );
}
