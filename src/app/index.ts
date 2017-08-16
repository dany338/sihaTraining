import { bot } from "../initBot";

bot.onText('message', (msg: any, match: any) => {

    let messageOptions = {
        parse_mode: 'HTML'
    };

    bot.sendMessage(msg.chat.id, `Hola <b>${msg.from.first_name}</b>`, messageOptions);
});