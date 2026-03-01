'use server';

/**
 * Acción de servidor para enviar los datos del formulario de Whitelist a Discord.
 * Incluye validación de respuestas de normativa con iconos visuales.
 */

export async function sendWhitelistToDiscord(formData: any) {
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1477726817933856880/PT0Q7VP3_V41by32EW32VmVIm0KWfac4ogP423p-nj02dY0lD68KiFEpzYr794ArlA9_'; 

  if (!DISCORD_WEBHOOK_URL) {
    return { success: false, error: 'Configuración de Webhook no encontrada.' };
  }

  // Respuestas correctas: 2, 3, 3, 4, 1, 3, 3, 2
  const correctAnswers = {
    q_restart: '2',
    q_911: '3',
    q_recognition: '3',
    q_hostage: '4',
    q_shooting: '1',
    q_fear: '3',
    q_mg: '3',
    q_pg: '2',
  };

  const validate = (key: string, value: string) => {
    const isCorrect = correctAnswers[key as keyof typeof correctAnswers] === value;
    return isCorrect ? `✅ (Opción ${value})` : `❌ (Marcó Opción ${value})`;
  };

  const embed = {
    title: '📝 NUEVA SOLICITUD DE WHITELIST',
    color: 0xe11d48,
    description: `Nueva postulación recibida para **NOTWEN RP**.`,
    fields: [
      { name: '👤 Usuario', value: formData.discordName, inline: true },
      { name: '🎂 Edad', value: formData.age, inline: true },
      { name: '🎮 Experiencia', value: formData.experience, inline: false },
      { name: '❓ Por qué Notwen', value: formData.reason, inline: false },
      { name: '📚 Conceptos', value: formData.concepts, inline: false },
      { name: '---', value: '**REVISIÓN DE NORMATIVA**', inline: false },
      { name: '🔄 Reinicios', value: validate('q_restart', formData.q_restart), inline: true },
      { name: '🚨 911 (Entorno)', value: validate('q_911', formData.q_911), inline: true },
      { name: '🎭 Reconocimiento', value: validate('q_recognition', formData.q_recognition), inline: true },
      { name: '👥 Rehenes', value: validate('q_hostage', formData.q_hostage), inline: true },
      { name: '🔫 Persecución', value: validate('q_shooting', formData.q_shooting), inline: true },
      { name: '😨 Valoración Vida', value: validate('q_fear', formData.q_fear), inline: true },
      { name: '🖥️ MetaGaming', value: validate('q_mg', formData.q_mg), inline: true },
      { name: '🦾 PowerGaming', value: validate('q_pg', formData.q_pg), inline: true },
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
