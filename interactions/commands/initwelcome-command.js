import { colors } from '../../config.js';
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';

export default async function (interaction) {
	const embed = new EmbedBuilder({
		title: interaction.options.getString('title'),
		description: interaction.options.getString('description'),
		color: colors.blue,
	});

	const components = [
		new ActionRowBuilder().setComponents([
			new ButtonBuilder().setCustomId('DEFAULT').setEmoji('💬').setLabel('Вопрос').setStyle(2),
			new ButtonBuilder().setCustomId('GENERAL').setEmoji('✉️').setLabel('Помощь').setStyle(2),
			new ButtonBuilder().setCustomId('RECHECK').setEmoji('🔩').setLabel('Перепроверка').setStyle(2),
		]),
	];

	await interaction.channel.send({ components: components, embeds: [embed] });
	interaction.reply({ content: 'Сообщение было отправлено в текущий канал.', ephemeral: true });
}
