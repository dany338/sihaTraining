/*
import {
  TelegramBot as TelegramBotModel
} from './bot/TelegramBot';
*/
const TelegramBot = require('node-telegram-bot-api');
const token = '393865087:AAHQJhT3VuzkGV9XUMr3wh8C2CpkIMY61bI';
let bot = new TelegramBot(token, { polling: true });

export {
  bot
}