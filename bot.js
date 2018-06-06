const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_BOT_TOKEN } = process.env;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true});
const figlet = require('figlet');

function getDateTime() {

    var date = new Date();
    date.setTimezone("America/Argentina/San_Juan");

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}



if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
  process.exit(1);
}



 bot.on('message', (msg) => {

 if (msg.text.toString().toLowerCase().indexOf("hola") === 0) {
     bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name);
 }
 });

 bot.on('message', (msg) => {
 if (msg.text.toString().toLowerCase().indexOf("hora") === 0) {
     bot.sendMessage(msg.chat.id, "Hora actual: " +getDateTime());
 }
 });




