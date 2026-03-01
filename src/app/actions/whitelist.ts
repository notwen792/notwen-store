'use server';

/**
 * Acción de servidor para enviar los datos del formulario de Whitelist a Discord.
 */

export async function sendWhitelistToDiscord(formData: any) {
  // REEMPLAZA ESTA URL con tu Webhook real de Discord
  const DISCORD_WEBHOOK_URL = ''; 

  if (!DISCORD_WEBHOOK_URL) {
    console.error('Discord Webhook URL no configurada.');
    return { success: false, error: 'Configuración pendiente.' };
  }

  const embed = {
    title: '📝 NUEVA SOLICITUD DE WHITELIST',
    color: 0xe11d48, // Color de Notwen (Destructive)
    description: `Nueva postulación recibida para **NOTWEN RP**. <@${formData.discordId || '1015040'}>`,
    fields: [
      { name: '👤 Usuario', value: formData.discordName, inline: true },
      { name: '🎂 Edad', value: formData.age, inline: true },
      { name: '🎮 Experiencia', value: formData.experience, inline: false },
      { name: '❓ Por qué Notwen', value: formData.reason, inline: false },
      { name: '📚 Conceptos (IC/OOC/MG/DM)', value: formData.concepts, inline: false },
      { name: '---', value: '**TEST DE NORMATIVA**', inline: false },
      { name: '🔄 Reinicios', value: formData.q_restart, inline: false },
      { name: '🚨 911 (Entorno)', value: formData.q_911, inline: false },
      { name: '🎭 Reconocimiento', value: formData.q_recognition, inline: false },
      { name: '👥 Rehenes', value: formData.q_hostage, inline: false },
      { name: '🔫 Persecución/Disparos', value: formData.q_shooting === 'opcion1' ? 'CORRECTA: Solo carrocería/ruedas desde vehículo.' : `INCORRECTA: Seleccionó la opción ${formData.q_shooting}`, inline: false },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: 'Sistema de Whitelist Interno - NOTWEN' }
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
