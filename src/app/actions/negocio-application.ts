'use server';

/**
 * Acción de servidor para enviar los datos del formulario de postulación de negocio a Discord.
 */

export async function sendNegocioApplicationToDiscord(formData: any) {
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1478153331380588556/_BiJY0PI5A2CKBhH3r4Ep1q8b2B77-PhkOJWUC2SciW2zIN45vwwzVfxpSGPNXlqnLNO'; 

  if (!DISCORD_WEBHOOK_URL) {
    return { success: false, error: 'Configuración de Webhook no encontrada.' };
  }

  const embed = {
    title: '🏢 NUEVA POSTULACIÓN A NEGOCIO / ACTIVO',
    color: 0xe11d48, // Rojo destructivo de la marca
    description: `Nueva postulación recibida para un activo de **NOTWEN RP**.`,
    fields: [
      { name: '👤 Nombre (OOC)', value: formData.realName, inline: true },
      { name: '🎂 Edad', value: formData.age, inline: true },
      { name: '🎮 Discord', value: formData.discordName, inline: true },
      { name: '🏢 Activo / Negocio', value: formData.businessName, inline: false },
      { name: '🎯 Enfoque del Negocio', value: formData.businessFocus, inline: false },
      { name: '💡 Items e Ideas', value: formData.itemsAndIdeas, inline: false },
      { name: '❓ ¿Por qué tú?', value: formData.whyMe, inline: false },
      { name: '📝 Información Extra', value: formData.extraInfo || 'No proporcionada', inline: false },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: 'Sistema de Gestión de Activos - NOTWEN' }
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
