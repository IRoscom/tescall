import log from '../utils/log.js';
import buttonTake from '../interactions/buttons/take.js';
import buttonClose from '../interactions/buttons/close.js';
import automessageMenu from '../interactions/automessage-menu.js';
import commands from '../commands/index.js';

export default async function (inter) {
	if (inter.type === 'MESSAGE_COMPONENT') {
		const [command] = inter.customId.split(':');
		switch (command) {
			case 'GET':
				await buttonTake(inter);
				break;

			case 'CLOSE':
				await buttonClose(inter);
				break;

			case 'AUTOMESSAGE':
				await automessageMenu(inter);
				break;

			default:
				log(`Что-то странное!`);
		}
	}

	if (inter.type === 'APPLICATION_COMMAND') {
		const command = commands[inter.commandName];
		await inter.deferReply();

		try {
			await command(inter);
		} catch (e) {
			console.warn(e);
		}
	}
}
