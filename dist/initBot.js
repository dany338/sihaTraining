"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
import {
  TelegramBot as TelegramBotModel
} from './bot/TelegramBot';
*/
var TelegramBot = require('node-telegram-bot-api');
//var token = '393865087:AAHQJhT3VuzkGV9XUMr3wh8C2CpkIMY61bI';
var token = process.env.TGBOTTOKEN;
var bot = new TelegramBot(token, { polling: true });
exports.bot = bot;
