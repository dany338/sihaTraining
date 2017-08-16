"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initBot_1 = require("../initBot");
var SihaApp;
(function (SihaApp) {
    var Mensajes;
    (function (Mensajes) {
        initBot_1.bot.onText(/\/start/, function (msg) {
            var messageOptions = {
                parse_mode: 'HTML'
            };
            initBot_1.bot.sendMessage(msg.chat.id, "Hola <b>" + msg.from.first_name + "</b>", messageOptions);
        });
    })(Mensajes = SihaApp.Mensajes || (SihaApp.Mensajes = {}));
})(SihaApp = exports.SihaApp || (exports.SihaApp = {}));
