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
import { Loader2, Send, Building2, Briefcase, Clock, Users, Star, Shield, Wrench, BadgeCheck, Skull, BookOpen, Target, MapPin } from 'lucide-react';

const baseSchema = z.object({
  realName: z.string().min(2, 'El nombre es obligatorio'),
  age: z.string().min(1, 'La edad es obligatoria'),
  discordName: z.string().min(2, 'El Discord es obligatorio'),
  businessName: z.string().min(1, 'El nombre del negocio es obligatorio'),
  activityHours: z.string().min(1, 'Indica las horas estimadas'),
  whyMe: z.string().min(10, 'Explica por qué deberías ser tú'),
  extraInfo: z.string().optional(),
});

// Esquemas específicos más profesionales
const negocioSchema = baseSchema.extend({
  previousExperience: z.string().min(10, 'Cuéntanos tu experiencia previa en gestión'),
  teamSize: z.string().min(1, 'Indica el tamaño del equipo'),
  businessFocus: z.string().min(10, 'Cuéntanos el enfoque que le darás al local'),
  itemsAndIdeas: z.string().min(10, 'Dinos qué items o ideas técnicas tienes'),
  valueProposition: z.string().min(15, 'Explica qué aportará tu gestión al servidor'),
});

const lspdSchema = baseSchema.extend({
  policeExperience: z.string().min(10, 'Describe tu trayectoria en otros cuerpos de seguridad'),
  lawKnowledge: z.string().min(10, '¿Qué nivel de conocimiento tienes del código penal?'),
  motivation: z.string().min(10, '¿Cuál es tu principal motivación para servir en LSPD?'),
});

const staffSchema = baseSchema.extend({
  modExperience: z.string().min(10, 'Describe tu experiencia previa moderando comunidades'),
  conflictResolution: z.string().min(10, '¿Cómo manejarías un conflicto grave entre usuarios?'),
  contribution: z.string().min(10, '¿Qué crees que puedes aportar al equipo administrativo?'),
});

const bandaSchema = baseSchema.extend({
  gangHistory: z.string().min(20, 'Necesitamos un lore detallado de la organización'),
  gangObjectives: z.string().min(10, '¿Qué metas criminales tenéis a corto y largo plazo?'),
  gangLocation: z.string().min(2, '¿Qué barrio o zona reclamáis como vuestro territorio?'),
  teamSize: z.string().min(1, 'Indica cuántos miembros activos sois actualmente'),
});

type FormValues = z.infer<typeof negocioSchema> & z.infer<typeof lspdSchema> & z.infer<typeof staffSchema> & z.infer<typeof bandaSchema>;

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
  const isBanda = initialBusinessName?.includes('BANDAS');

  let schema: any = negocioSchema;
  if (isLSPD) schema = lspdSchema;
  else if (isStaff) schema = staffSchema;
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
      previousExperience: '',
      teamSize: '',
      businessFocus: '',
      itemsAndIdeas: '',
      valueProposition: '',
      policeExperience: '',
      lawKnowledge: '',
      motivation: '',
      modExperience: '',
      conflictResolution: '',
      contribution: '',
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
        description: `Tu solicitud para ${values.businessName} ha sido procesada con éxito.`,
      });
      onSuccess();
    } else {
      toast({
        variant: "destructive",
        title: "Error de Envío",
        description: result.error || "No se pudo conectar con el servidor de Discord.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 overflow-y-auto max-h-[75vh] custom-scrollbar">
        {/* SECCIÓN 1: DATOS OOC */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <Users className="h-4 w-4 text-destructive" />
            <h4 className="text-xs font-black uppercase tracking-widest text-destructive/80">Información del Candidato (OOC)</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="realName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Real</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre completo" {...field} className="bg-background/50 border-white/10 focus:border-destructive/50" />
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
                  <FormLabel>Edad</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Tu edad actual" {...field} className="bg-background/50 border-white/10 focus:border-destructive/50" />
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
                  <FormLabel>Usuario de Discord</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: User#0000" {...field} className="bg-background/50 border-white/10 focus:border-destructive/50" />
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
                  <FormLabel>Tipo de Solicitud</FormLabel>
                  <FormControl>
                    <div className="relative">
                      {isLSPD && <BadgeCheck className="absolute left-3 top-2.5 h-4 w-4 text-blue-500" />}
                      {isStaff && <Shield className="absolute left-3 top-2.5 h-4 w-4 text-emerald-500" />}
                      {isBanda && <Skull className="absolute left-3 top-2.5 h-4 w-4 text-purple-500" />}
                      {!isLSPD && !isStaff && !isBanda && <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-destructive" />}
                      <Input {...field} readOnly className="pl-10 bg-muted/20 border-white/10 cursor-default font-bold text-white" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* SECCIÓN 2: PROYECTO / EXPERIENCIA */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <Briefcase className="h-4 w-4 text-destructive" />
            <h4 className="text-xs font-black uppercase tracking-widest text-destructive/80">Detalles del Proyecto / Trayectoria</h4>
          </div>

          {/* CAMPOS ESPECÍFICOS LSPD */}
          {isLSPD && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="policeExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">Trayectoria Policial Previa</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Indica servidores, rangos ostentados y tiempo de servicio..." {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
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
                    <FormLabel>Conocimientos Jurídicos (Penal/Procesal)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="¿Qué leyes conoces? ¿Cómo aplicarías el uso de la fuerza?" {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motivación de Ingreso</FormLabel>
                    <FormControl>
                      <Textarea placeholder="¿Por qué quieres servir en el departamento de policía?" {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* CAMPOS ESPECÍFICOS STAFF */}
          {isStaff && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="modExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experiencia Administrativa</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Servidores previos, cargos ocupados y herramientas de gestión conocidas..." {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
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
                    <FormLabel>Protocolo de Resolución de Conflictos</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Explica tu metodología para mediar entre usuarios en disputa..." {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contribution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Propuesta de Mejora</FormLabel>
                    <FormControl>
                      <Textarea placeholder="¿Qué áreas del servidor crees que puedes mejorar desde el equipo de Staff?" {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* CAMPOS ESPECÍFICOS BANDAS */}
          {isBanda && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="gangHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Lore y Orígenes de la Facción</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Desarrolla la historia de la banda, su filosofía y trasfondo..." {...field} className="bg-background/50 border-white/10 min-h-[120px]" />
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
                    <FormLabel className="flex items-center gap-2"><Target className="h-4 w-4" /> Objetivos Estratégicos</FormLabel>
                    <FormControl>
                      <Textarea placeholder="¿Qué tipo de actividades ilegales realizaréis? ¿Cuál es vuestra meta?" {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
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
                      <FormLabel className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Zona de Influencia</FormLabel>
                      <FormControl>
                        <Input placeholder="Barrio o zona deseada" {...field} className="bg-background/50 border-white/10" />
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
                      <FormLabel className="flex items-center gap-2"><Users className="h-4 w-4" /> Miembros Iniciales</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Cantidad confirmada" {...field} className="bg-background/50 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          )}

          {/* CAMPOS NEGOCIOS ESTÁNDAR */}
          {!isLSPD && !isStaff && !isBanda && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="previousExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experiencia Previa en Gestión (IC/OOC)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntanos sobre otros negocios o grupos que hayas liderado..." {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
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
                      <FormLabel>Personal Inicial</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Personas contratadas" {...field} className="bg-background/50 border-white/10" />
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
                      <FormLabel>Disponibilidad Horaria</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: 4-6 horas diarias" {...field} className="bg-background/50 border-white/10" />
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
                    <FormLabel>Enfoque de Roleplay del Local</FormLabel>
                    <FormControl>
                      <Textarea placeholder="¿Cómo será el ambiente? ¿Qué tipo de eventos organizarás?" {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
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
                    <FormLabel>Propuestas Técnicas / Items</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ideas de items, mecánicas o mapeos específicos..." {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
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
                    <FormLabel className="flex items-center gap-2"><Star className="h-4 w-4 text-destructive" /> Valor Añadido al Servidor</FormLabel>
                    <FormControl>
                      <Textarea placeholder="¿Por qué tu gestión será mejor que la de otros?" {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        {/* SECCIÓN 3: CIERRE */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <Star className="h-4 w-4 text-destructive" />
            <h4 className="text-xs font-black uppercase tracking-widest text-destructive/80">Consideraciones Finales</h4>
          </div>

          {(isLSPD || isStaff || isBanda) && (
            <FormField
              control={form.control}
              name="activityHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tiempo Disponible Semanal</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: 30 horas semanales" {...field} className="bg-background/50 border-white/10" />
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
                <FormLabel>¿Por qué deberíamos seleccionarte?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tus puntos fuertes y compromiso personal..." {...field} className="bg-background/50 border-white/10 min-h-[100px]" />
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
                <FormLabel>Anexos (Opcional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Cualquier otro detalle que quieras mencionar..." {...field} className="bg-background/50 border-white/10 min-h-[80px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-14 bg-gradient-to-r from-destructive to-[hsl(var(--chart-1))] hover:brightness-110 shadow-xl shadow-destructive/20 text-xl font-black tracking-widest uppercase transition-all"
        >
          {isLoading ? (
            <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> PROCESANDO...</>
          ) : (
            <><Send className="mr-2 h-6 w-6" /> ENVIAR POSTULACIÓN PROFESIONAL</>
          )}
        </Button>
      </form>
    </Form>
  );
}
