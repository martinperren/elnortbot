const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_BOT_TOKEN } = process.env;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true});
const figlet = require('figlet');







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


function dia(){
    var date = new Date();
     var dia = date.getDay()
return dia;

}


function horariosDeSfe(){
    var horarios = [];
    var resultado = [];
    var dia = dia();
    
    
    switch(dia) {
           case 1: //lunes
        horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
            resultado = horariosDeSfeAux(horarios);
        break;
            case 2: //martes
        horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             resultado = horariosDeSfeAux(horarios);
        break;
            case 3: //miercoles
        horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             resultado = horariosDeSfeAux(horarios);
        break;
            case 4: //jueves
       horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             resultado = horariosDeSfeAux(horarios);
        break;
            case 5: //viernes
       horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             resultado = horariosDeSfeAux(horarios);
        break;
            case 6: //sabado
        horarios  = ["05:30","10:10","12:00","14:00","18:00","19:15","22:30"];
            resultado = horariosDeSfeAux(horarios);
        break;
            case 7: //domingo
        horarios  = ["08:30","10:10","13:30","17:15","20:30","22:30","23:45"];
             resultado = horariosDeSfeAux(horarios);
        break;
            
            
     
}
        
    return resultado; 
   
}





function horariosDeSfeAux(array){
    
    var proximos = [];
    var i;
    tam = array.length;
for (i = 0; i < tam; i++) {
    if(array[i]>hora()){
        proximos.push(array[i]);   
       
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

 if (msg.text.toString().toLowerCase().indexOf("desfe") === 0) {
     bot.sendMessage(msg.chat.id, "Proximas salidas: " +horariosDeSfe());
 }
 });

bot.on('message', (msg) => {

 if (msg.text.toString().toLowerCase().indexOf("dia") === 0) {
    
     var dia = dia();
     
       switch(dia) {
           case 1: //lunes
        bot.sendMessage(msg.chat.id, "Hoy es Lunes" + msg.from.first_name+"!");
        break;
            case 2: //martes
        bot.sendMessage(msg.chat.id, "Hoy es Martes " + msg.from.first_name+"!");
        break;
            case 3: //miercoles
        bot.sendMessage(msg.chat.id, "Hoy es Miercoles " + msg.from.first_name+"!");
        break;
            case 4: //jueves
       bot.sendMessage(msg.chat.id, "Hoy es Jueves " + msg.from.first_name+"!");
        break;
            case 5: //viernes
       bot.sendMessage(msg.chat.id, "Hoy es Viernes " + msg.from.first_name+"!");
        break;
            case 6: //sabado
        bot.sendMessage(msg.chat.id, "Hoy es Sábado " + msg.from.first_name+"!");
        break;
            case 7: //domingo
        bot.sendMessage(msg.chat.id, "Hoy es Domingo  + msg.from.first_name+"!");
        break;
            
            
     
}
     
     
     
     
     
 }
 });



var http = require("http");
setInterval(function() {
    http.get("http://elnortebot.herokuapp.com");
}, 300000); // every 5 minutes (300000)
