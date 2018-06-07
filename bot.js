const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_BOT_TOKEN } = process.env;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true});
const figlet = require('figlet');



var lunvierdesfe = ["00:00","06:45","10:10","12:00","13:00", "14:00","15:50","18:00","19:15","21:05","22:30"];



function hora(){
    var date = new Date();
    
 var hour = date.getHours();
   hour = parseInt(hour);
     hour = hour -3;	  
     hour = (hour < 10 ? "0" : "") + hour;
var min  = date.getMinutes();
   min = (min < 10 ? "0" : "") + min;

return hour + ":" + min;

}


function horarios(){
    var proximos = [];
    var i;
    tam = lunvierdesfe.length;
for (i = 0; i < tam; i++) {
    if(lunvierdesfe[i]>hora()){
        proximos.push(lunvierdesfe[i]);   
       
    }
}
    return proximos; 
   
}





if (!TELEGRAM_BOT_TOKEN) {
  console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
  process.exit(1);
}



 bot.on('message', (msg) => {

 if (msg.text.toString().toLowerCase().indexOf("hola") === 0) {
     bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name+"!");
 }
 });

 bot.on('message', (msg) => {

 if (msg.text.toString().toLowerCase().indexOf("chau") === 0) {
     bot.sendMessage(msg.chat.id, "Nos re vimos!");
 }
 });


 bot.on('message', (msg) => {
 if (msg.text.toString().toLowerCase().indexOf("hora") === 0) {
     bot.sendMessage(msg.chat.id, "Hora actual: " +hora());
 }
 });


bot.on('message', (msg) => {

 if (msg.text.toString().toLowerCase().indexOf("test") === 0) {
     bot.sendMessage(msg.chat.id, "Proximas salidas: " + horarios());
 }
 });



var http = require("http");
setInterval(function() {
    http.get("http://elnortebot.herokuapp.com");
}, 300000); // every 5 minutes (300000)



