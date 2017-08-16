import { bot } from "../initBot";

export namespace Index {

    export enum Options {
        registrarAusencia = "Registrar ausencia",
        enviarRecordatorio = "Enviar recordatorio",
        mensajeAcudiente = "Mensaje acudiente"
    }

    export namespace Metodos {

        export const sendMessage = (msg: any) => {

            let messageOptions = {
                parse_mode: 'HTML',
                reply_markup: {
                    keyboard: [
                        [
                            {
                                text: Options.registrarAusencia
                            }
                        ],
                        [
                            {
                                text: Options.enviarRecordatorio
                            }
                        ],
                        [
                            {
                                text: Options.mensajeAcudiente
                            }
                        ]
                    ]
                }
            };

            bot.sendMessage(
                msg.chat.id,
                `Profesor <b>${msg.from.first_name}</b> ¿Que desea realizar?`,
                messageOptions
            );

        }

    }

    export namespace EventHandlers {

        export const listen = () => {

            bot.on('message', (msg: any) => {

                if (!msg.text) {
                    return;
                }

                if (msg.text.indexOf("Registrar ausencia") === 0) {

                    let messageOptions = {
                        parse_mode: 'HTML',
                        //aca otro teclado
                    }

                    bot.sendMessage(msg.chat.id, "Ausencia registrada", messageOptions);
                }
            });

        }

    }

}

Index.EventHandlers.listen();