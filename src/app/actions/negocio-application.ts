'use server';

/**
 * Acción de servidor para enviar los datos del formulario de postulación a Discord.
 * Adaptado para manejar diferentes tipos de postulaciones (Negocios, LSPD, Staff, Mecánicos, Bandas).
 */

export async function sendNegocioApplicationToDiscord(formData: any) {
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1478153331380588556/_BiJY0PI5A2CKBhH3r4Ep1q8b2B77-PhkOJWUC2SciW2zIN45vwwzVfxpSGPNXlqnLNO'; 

  if (!DISCORD_WEBHOOK_URL) {
    return { success: false, error: 'Configuración de Webhook no encontrada.' };
  }

  let title = '🏢 NUEVA POSTULACIÓN';
  let color = 0xe11d48; // Rojo por defecto
  const fields = [
    { name: '👤 Candidato (OOC)', value: formData.realName, inline: true },
    { name: '🎂 Edad', value: formData.age, inline: true },
    { name: '🎮 Discord', value: formData.discordName, inline: true },
  ];

  // Personalización según el tipo de postulación
  if (formData.businessName.includes('LSPD')) {
    title = '👮 NUEVA POSTULACIÓN LSPD';
    color = 0x2563eb; // Azul
    fields.push(
      { name: '🚔 Experiencia Policial', value: formData.policeExperience, inline: false },
      { name: '📚 Conocimiento Código Penal', value: formData.lawKnowledge, inline: false },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '❓ Por qué LSPD', value: formData.whyMe, inline: false }
    );
  } else if (formData.businessName.includes('STAFF')) {
    title = '🛡️ NUEVA POSTULACIÓN STAFF';
    color = 0x10b981; // Verde
    fields.push(
      { name: '🛠️ Experiencia Moderación', value: formData.modExperience, inline: false },
      { name: '🤝 Resolución de Conflictos', value: formData.conflictResolution, inline: false },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '❓ Por qué Staff', value: formData.whyMe, inline: false }
    );
  } else if (formData.businessName.includes('MECÁNICOS')) {
    title = '🔧 NUEVA POSTULACIÓN MECÁNICOS';
    color = 0xf59e0b; // Ámbar
    fields.push(
      { name: '🛠️ Experiencia Mecánica', value: formData.mechanicExperience, inline: false },
      { name: '🏎️ Conocimiento Tuning/Motores', value: formData.tuningKnowledge, inline: false },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '❓ Por qué Mecánico', value: formData.whyMe, inline: false }
    );
  } else if (formData.businessName.includes('BANDAS')) {
    title = '💀 NUEVA POSTULACIÓN BANDAS';
    color = 0x8b5cf6; // Púrpura
    fields.push(
      { name: '📜 Historia / Lore', value: formData.gangHistory, inline: false },
      { name: '🎯 Objetivos Criminales', value: formData.gangObjectives, inline: false },
      { name: '📍 Zona Deseada', value: formData.gangLocation, inline: true },
      { name: '👥 Miembros Iniciales', value: formData.teamSize, inline: true },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '❓ Por qué elegirle', value: formData.whyMe, inline: false }
    );
  } else {
    // Formulario de Negocio Estándar
    title = `🏢 POSTULACIÓN ACTIVO: ${formData.businessName}`;
    fields.push(
      { name: '🏢 Negocio', value: `**${formData.businessName}**`, inline: false },
      { name: '💼 Experiencia Gestión', value: formData.previousExperience, inline: false },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '👥 Equipo Inicial', value: formData.teamSize, inline: true },
      { name: '🎯 Enfoque', value: formData.businessFocus, inline: false },
      { name: '💡 Ideas/Items', value: formData.itemsAndIdeas, inline: false },
      { name: '🌟 Aporte', value: formData.valueProposition, inline: false },
      { name: '❓ Por qué elegirle', value: formData.whyMe, inline: false }
    );
  }

  if (formData.extraInfo) {
    fields.push({ name: '📝 Info Extra', value: formData.extraInfo, inline: false });
  }

  const embed = {
    title,
    color,
    fields,
    timestamp: new Date().toISOString(),
    footer: { text: 'Sistema de Gestión de Solicitudes - NOTWEN RP' }
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!response.ok) throw new Error('Error al enviar a Discord');

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'No se pudo enviar la solicitud.' };
  }
}