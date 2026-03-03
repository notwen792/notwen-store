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
import { Loader2, Send, Building2, Briefcase, Clock, Users, Star, Shield, Wrench, BadgeCheck, Skull } from 'lucide-react';

const baseSchema = z.object({
  realName: z.string().min(2, 'El nombre es obligatorio'),
  age: z.string().min(1, 'La edad es obligatoria'),
  discordName: z.string().min(2, 'El Discord es obligatorio'),
  businessName: z.string().min(1, 'El nombre del negocio es obligatorio'),
  activityHours: z.string().min(1, 'Indica las horas estimadas'),
  whyMe: z.string().min(10, 'Explica por qué deberías ser tú'),
  extraInfo: z.string().optional(),
});

// Esquemas específicos
const negocioSchema = baseSchema.extend({
  previousExperience: z.string().min(10, 'Cuéntanos tu experiencia previa'),
  teamSize: z.string().min(1, 'Indica el tamaño del equipo'),
  businessFocus: z.string().min(10, 'Cuéntanos el enfoque que le darás'),
  itemsAndIdeas: z.string().min(10, 'Dinos qué items o ideas tienes'),
  valueProposition: z.string().min(15, 'Explica qué aportarás al servidor'),
});

const lspdSchema = baseSchema.extend({
  policeExperience: z.string().min(10, 'Describe tu experiencia previa en cuerpos de seguridad'),
  lawKnowledge: z.string().min(10, '¿Conoces el código penal y procesal?'),
});

const staffSchema = baseSchema.extend({
  modExperience: z.string().min(10, 'Describe tu experiencia moderando comunidades'),
  conflictResolution: z.string().min(10, '¿Cómo manejas situaciones de conflicto entre usuarios?'),
});

const mechanicSchema = baseSchema.extend({
  mechanicExperience: z.string().min(10, 'Describe tu experiencia en talleres mecánicos'),
  tuningKnowledge: z.string().min(10, '¿Qué conocimientos tienes sobre modificaciones y motores?'),
});

const bandaSchema = baseSchema.extend({
  gangHistory: z.string().min(10, 'Cuéntanos la historia de tu banda/organización'),
  gangObjectives: z.string().min(10, '¿Qué objetivos tenéis en la ciudad?'),
  gangLocation: z.string().min(2, '¿Qué zona o barrio os gustaría habitar?'),
  teamSize: z.string().min(1, 'Indica cuántos miembros sois inicialmente'),
});

type FormValues = z.infer<typeof negocioSchema> & z.infer<typeof lspdSchema> & z.infer<typeof staffSchema> & z.infer<typeof mechanicSchema> & z.infer<typeof bandaSchema>;

export function NegocioForm({ 
  onSuccess, 
  initialBusinessName 
}: { 
  onSuccess: () => void;
  initialBusinessName?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const isLSPD = initialBusinessName?.includes('LSPD');
  const isStaff = initialBusinessName?.includes('STAFF');
  const isMechanic = initialBusinessName?.includes('MECÁNICOS');
  const isBanda = initialBusinessName?.includes('BANDAS');

  let schema: any = negocioSchema;
  if (isLSPD) schema = lspdSchema;
  else if (isStaff) schema = staffSchema;
  else if (isMechanic) schema = mechanicSchema;
  else if (isBanda) schema = bandaSchema;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      realName: '',
      age: '',
      discordName: '',
      businessName: initialBusinessName || '',
      activityHours: '',
      whyMe: '',
      extraInfo: '',
      // Negocio
      previousExperience: '',
      teamSize: '',
      businessFocus: '',
      itemsAndIdeas: '',
      valueProposition: '',
      // LSPD
      policeExperience: '',
      lawKnowledge: '',
      // Staff
      modExperience: '',
      conflictResolution: '',
      // Mechanic
      mechanicExperience: '',
      tuningKnowledge: '',
      // Banda
      gangHistory: '',
      gangObjectives: '',
      gangLocation: '',
    },
  });

  async function onSubmit(values: FormValues) {
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
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-destructive/80 border-b border-white/5 pb-2">Información de Identidad</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="realName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre (Real/OOC)</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} className="bg-background/50 border-white/10" />
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
                      <Input type="number" placeholder="Tu edad" {...field} className="bg-background/50 border-white/10" />
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
                      <Input placeholder="Ej: User#0000" {...field} className="bg-background/50 border-white/10" />
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
                    <FormLabel>Puesto/Activo</FormLabel>
                    <FormControl>
                      <div className="relative">
                        {isLSPD && <BadgeCheck className="absolute left-3 top-2.5 h-4 w-4 text-blue-500" />}
                        {isStaff && <Shield className="absolute left-3 top-2.5 h-4 w-4 text-emerald-500" />}
                        {isMechanic && <Wrench className="absolute left-3 top-2.5 h-4 w-4 text-amber-500" />}
                        {isBanda && <Skull className="absolute left-3 top-2.5 h-4 w-4 text-purple-500" />}
                        {!isLSPD && !isStaff && !isMechanic && !isBanda && <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-destructive" />}
                        <Input {...field} readOnly className="pl-10 bg-muted/20 border-white/10 cursor-default font-bold text-white" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-destructive/80 border-b border-white/5 pb-2">Perfil y Proyecto</h4>
            
            {/* CAMPOS DINÁMICOS SEGÚN EL TIPO */}
            {isLSPD && (
              <>
                <FormField
                  control={form.control}
                  name="policeExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-blue-500" />
                        Experiencia previa en cuerpos de seguridad
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntanos en qué servidores has sido policía y qué rango alcanzaste..." {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lawKnowledge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Conocimientos del código penal/procesal</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Qué nivel de conocimiento tienes sobre las leyes de la ciudad?" {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {isStaff && (
              <>
                <FormField
                  control={form.control}
                  name="modExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-emerald-500" />
                        Experiencia previa en moderación
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe tu experiencia gestionando comunidades o servidores..." {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="conflictResolution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resolución de conflictos</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Cómo actuarías ante una disputa grave entre dos usuarios?" {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {isBanda && (
              <>
                <FormField
                  control={form.control}
                  name="gangHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Skull className="h-4 w-4 text-purple-500" />
                        Historia y Lore de la Banda
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿De dónde vienen? ¿Cuál es su trasfondo en la ciudad?" {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gangObjectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objetivos y metas criminales</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿A qué se dedicarán principalmente? ¿Qué quieren lograr?" {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="gangLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zona / Territorio deseado</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Davis, Rancho, etc." {...field} className="bg-background/50 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Miembros iniciales</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Ej: 5" {...field} className="bg-background/50 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {/* Campos originales para negocios si no es ninguno de los anteriores */}
            {!isLSPD && !isStaff && !isMechanic && !isBanda && (
              <>
                <FormField
                  control={form.control}
                  name="previousExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-destructive" />
                        Experiencia previa en gestión (IC/OOC)
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe tu experiencia previa gestionando grupos o negocios..." {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-destructive" />
                          Tamaño del equipo inicial
                        </FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Personas confirmadas" {...field} className="bg-background/50 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="activityHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-destructive" />
                          Horas semanales
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: 20-30 horas" {...field} className="bg-background/50 border-white/10" />
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
                      <FormLabel>Enfoque y visión del negocio</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Qué tipo de rol se llevará a cabo? ¿Cómo será el ambiente?" {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
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
                      <FormLabel>Items personalizados e ideas técnicas</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Qué items o mecánicas específicas te gustaría implementar?" {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="valueProposition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-destructive" />
                        ¿Qué aportará tu gestión a NOTWEN RP?
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe por qué tu proyecto mejorará la experiencia..." {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Campos comunes para postulaciones básicas */}
            {(isLSPD || isStaff || isMechanic || isBanda) && (
               <FormField
                  control={form.control}
                  name="activityHours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                        Horas semanales disponibles
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: 20-30 horas" {...field} className="bg-background/50 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
               />
            )}

            <FormField
              control={form.control}
              name="whyMe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿Por qué deberías ser el elegido?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tus puntos fuertes para este cargo..." {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
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
                  <FormLabel>Información adicional (Opcional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Cualquier otro detalle relevante..." {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-14 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 shadow-xl shadow-destructive/20 text-xl font-black tracking-widest uppercase"
        >
          {isLoading ? (
            <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> PROCESANDO...</>
          ) : (
            <><Send className="mr-2 h-6 w-6" /> ENVIAR POSTULACIÓN</>
          )}
        </Button>
      </form>
    </Form>
  );
}