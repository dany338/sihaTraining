"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../initBot");
initBot_1.bot.onText('message', function (msg, match) {
    var messageOptions = {
        parse_mode: 'HTML'
    };
    initBot_1.bot.sendMessage(msg.chat.id, "Hola <b>" + msg.from.first_name + "</b>", messageOptions);
});
