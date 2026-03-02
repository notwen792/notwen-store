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
import { sendNegocioApplicationToDiscord } from '@/app/actions/negocio-application';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, Building2 } from 'lucide-react';

const formSchema = z.object({
  discordName: z.string().min(2, 'Nombre de Discord es obligatorio'),
  age: z.string().min(1, 'La edad es obligatoria'),
  businessName: z.string().min(1, 'El nombre del negocio es obligatorio'),
  experience: z.string().min(10, 'Cuéntanos tu experiencia previa'),
  project: z.string().min(10, 'Explica tu proyecto o motivo de postulación'),
  availability: z.string().min(5, 'Dinos tu disponibilidad horaria'),
});

export function NegocioForm({ 
  onSuccess, 
  initialBusinessName 
}: { 
  onSuccess: () => void;
  initialBusinessName?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      discordName: '',
      age: '',
      businessName: initialBusinessName || '',
      experience: '',
      project: '',
      availability: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const result = await sendNegocioApplicationToDiscord(values);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "¡Postulación Enviada!",
        description: `Tu solicitud para ${values.businessName} ha sido enviada correctamente.`,
      });
      onSuccess();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Hubo un problema al enviar la postulación.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="discordName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de Discord</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: User#0000" {...field} className="bg-background/50" />
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
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Negocio / Puesto a Postular</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input {...field} readOnly className="pl-10 bg-muted/20 cursor-default" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experiencia previa (Gestión/Rol)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Cuéntanos si has llevado negocios antes..." {...field} className="bg-background/50 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="project"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cuál es tu proyecto o motivo?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe qué harías con este activo..." {...field} className="bg-background/50 min-h-[100px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Disponibilidad horaria</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Tardes y noches (España)" {...field} className="bg-background/50" />
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
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> ENVIANDO...</>
          ) : (
            <><Send className="mr-2 h-5 w-5" /> ENVIAR POSTULACIÓN</>
          )}
        </Button>
      </form>
    </Form>
  );
}
