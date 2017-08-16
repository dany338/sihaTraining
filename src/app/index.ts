import { bot } from "../initBot";

export namespace SihaApp {

    export namespace Mensajes {
        bot.onText(/\/start/, (msg: any) => {

            let messageOptions = {
                parse_mode: 'HTML'
            };

            bot.sendMessage(msg.chat.id, `Hola <b>${msg.from.first_name}</b>`, messageOptions);
        });
    }
}