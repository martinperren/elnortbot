const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_BOT_TOKEN } = process.env;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true});
const figlet = require('figlet');









var port = process.env.PORT || 8443;
var host = process.env.HOST;




if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
  process.exit(1);
}



function onMessage(msg, reply) {
  figlet(msg.text, (err, data) => {
    if (err) {
      reply.text('An error occured. Probably text format is not correct.').then();
      return;
    }
    const markdownResult = `${'```\n'}${data}${'\n```'}`;
    reply.markdown(markdownResult).then();
  });
}

bot.text(onMessage);
