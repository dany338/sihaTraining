import { bot } from "../initBot";

import { Index as DocentesIndex } from "../docentes";

export namespace SihaApp {

    export namespace Mensajes {
        bot.onText(/\/start/, (msg: any) => {
            DocentesIndex.Metodos.sendMessage(msg);
        });
    }
}