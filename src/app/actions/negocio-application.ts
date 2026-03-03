'use server';

/**
 * Acción de servidor profesionalizada para enviar los datos de postulación a Discord.
 * Captura campos detallados para LSPD, Staff, Bandas y Negocios.
 */

export async function sendNegocioApplicationToDiscord(formData: any) {
  const DEFAULT_WEBHOOK_URL = 'https://discord.com/api/webhooks/1478153331380588556/_BiJY0PI5A2CKBhH3r4Ep1q8b2B77-PhkOJWUC2SciW2zIN45vwwzVfxpSGPNXlqnLNO'; 
  const STAFF_WEBHOOK_URL = 'https://discord.com/api/webhooks/1478478593469452309/yWwTN8mwT7CrapIhcZAMK3bdnw8a2O5Or5QK7A8Gldn8yRTGQQR0o1d-TRgU-ZU4Im06';
  const LSPD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1478478354557702164/VqgHRhyKBZEYsAYkoqh41tF4nyAuZYgd0cawuI8wZlTvAHADY2pMPgZGrkIOgohDh_Vo';

  let DISCORD_WEBHOOK_URL = DEFAULT_WEBHOOK_URL;
  let title = '🏢 NUEVA POSTULACIÓN';
  let color = 0xe11d48; // Rojo
  const fields = [
    { name: '👤 Candidato (OOC)', value: formData.realName, inline: true },
    { name: '🎂 Edad', value: formData.age, inline: true },
    { name: '🎮 Discord', value: formData.discordName, inline: true },
  ];

  // LÓGICA DE CAMPOS ESPECÍFICOS POR ROL
  if (formData.businessName.includes('LSPD')) {
    DISCORD_WEBHOOK_URL = LSPD_WEBHOOK_URL;
    title = '👮 INFORME DE POSTULACIÓN LSPD';
    color = 0x2563eb; // Azul
    fields.push(
      { name: '🚔 Trayectoria Policial', value: formData.policeExperience, inline: false },
      { name: '📚 Conocimiento Legal', value: formData.lawKnowledge, inline: false },
      { name: '💡 Motivación', value: formData.motivation, inline: false },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '❓ Por qué seleccionarle', value: formData.whyMe, inline: false }
    );
  } else if (formData.businessName.includes('STAFF')) {
    DISCORD_WEBHOOK_URL = STAFF_WEBHOOK_URL;
    title = '🛡️ INFORME DE POSTULACIÓN STAFF';
    color = 0x10b981; // Verde
    fields.push(
      { name: '🛠️ Experiencia Moderación', value: formData.modExperience, inline: false },
      { name: '🤝 Resolución Conflictos', value: formData.conflictResolution, inline: false },
      { name: '🌟 Aporte al Equipo', value: formData.contribution, inline: false },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '❓ Por qué seleccionarle', value: formData.whyMe, inline: false }
    );
  } else if (formData.businessName.includes('BANDAS')) {
    title = '💀 INFORME DE POSTULACIÓN BANDAS';
    color = 0x8b5cf6; // Púrpura
    fields.push(
      { name: '📜 Lore / Historia', value: formData.gangHistory, inline: false },
      { name: '🎯 Objetivos Estratégicos', value: formData.gangObjectives, inline: false },
      { name: '📍 Territorio', value: formData.gangLocation, inline: true },
      { name: '👥 Miembros Iniciales', value: formData.teamSize, inline: true },
      { name: '⏰ Disponibilidad', value: formData.activityHours, inline: true },
      { name: '❓ Por qué seleccionarle', value: formData.whyMe, inline: false }
    );
  } else {
    // Negocios Estándar
    title = `🏢 INFORME DE ACTIVO: ${formData.businessName}`;
    fields.push(
      { name: '🏢 Activo Solicitado', value: `**${formData.businessName}**`, inline: false },
      { name: '💼 Exp. Gestión', value: formData.previousExperience, inline: false },
      { name: '🎯 Enfoque RP', value: formData.businessFocus, inline: false },
      { name: '💡 Items/Mecánicas', value: formData.itemsAndIdeas, inline: false },
      { name: '🌟 Valor Añadido', value: formData.valueProposition, inline: false },
      { name: '👥 Equipo', value: formData.teamSize, inline: true },
      { name: '⏰ Horas', value: formData.activityHours, inline: true },
      { name: '❓ Por qué seleccionarle', value: formData.whyMe, inline: false }
    );
  }

  if (formData.extraInfo) {
    fields.push({ name: '📝 Información Adicional', value: formData.extraInfo, inline: false });
  }

  const embed = {
    title,
    description: `Se ha recibido una nueva solicitud profesional para el servidor.`,
    color,
    fields,
    timestamp: new Date().toISOString(),
    footer: { text: 'NOTWEN RP - Sistema de Gestión de RRHH' }
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
    return { success: false, error: 'No se pudo procesar la solicitud en Discord.' };
  }
}
