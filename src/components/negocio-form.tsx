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
  realName: z.string().min(2, 'El nombre es obligatorio'),
  age: z.string().min(1, 'La edad es obligatoria'),
  discordName: z.string().min(2, 'El Discord es obligatorio'),
  businessName: z.string().min(1, 'El nombre del negocio es obligatorio'),
  businessFocus: z.string().min(10, 'Cuéntanos el enfoque que le darás'),
  itemsAndIdeas: z.string().min(10, 'Dinos qué items o ideas tienes'),
  whyMe: z.string().min(10, 'Explica por qué deberías ser tú'),
  extraInfo: z.string().optional(),
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
      realName: '',
      age: '',
      discordName: '',
      businessName: initialBusinessName || '',
      businessFocus: '',
      itemsAndIdeas: '',
      whyMe: '',
      extraInfo: '',
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="realName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre (Real/OOC)</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} className="bg-background/50" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="discordName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discord</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: User#0000" {...field} className="bg-background/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activo / Negocio</FormLabel>
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
          </div>

          <FormField
            control={form.control}
            name="businessFocus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enfoque que le quieras dar al negocio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe tu visión para el negocio..." {...field} className="bg-background/50 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="itemsAndIdeas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Items que quieras añadir o ideas</FormLabel>
                <FormControl>
                  <Textarea placeholder="¿Qué añadirías al negocio?" {...field} className="bg-background/50 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whyMe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Por qué tú?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Cuéntanos por qué eres el candidato ideal..." {...field} className="bg-background/50 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="extraInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Algo más que veas tú (Opcional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Cualquier otro detalle..." {...field} className="bg-background/50 min-h-[80px]" />
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
