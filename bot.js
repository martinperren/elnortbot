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
     var day = date.getDay()
return day;
}


function horariosDeSfe(){
    var horarios = [];
    var resultado = [];
   
    
    
    switch(parseInt(dia())) {
           case 1: //lunes
        horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
            return horariosAux(horarios);
        break;
            case 2: //martes
        horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             return horariosAux(horarios);
        break;
            case 3: //miercoles
        horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             return horariosAux(horarios);
        break;
            case 4: //jueves
       horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             return horariosAux(horarios);
        break;
            case 5: //viernes
       horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","19:15","21:05","22:30"];
             return horariosAux(horarios);
        break;
            case 6: //sabado
        horarios  = ["05:30","10:10","12:00","14:00","18:00","19:15","22:30"];
            return horariosAux(horarios);
        break;
            case 7: //domingo
        horarios  = ["08:30","10:10","13:30","17:15","20:30","22:30","23:45"];
             return horariosAux(horarios);
        break;
            
            
     
}
        
    return 0; 
   
}




function horariosDeSCC(){
    var horarios = [];
    var resultado = [];
   
    
    
    switch(parseInt(dia())) {
           case 1: //lunes
        horarios  = ["05:35","06:13","07:30","09:00","12:33","14:23","15:05","15:55","17:40","19:45","21:18"];
            return horariosAux(horarios);
        break;
            case 2: //martes
        horarios  = ["05:35","06:13","07:30","09:00","12:33","14:23","15:05","15:55","17:40","19:45","21:18"];
             return horariosAux(horarios);
        break;
            case 3: //miercoles
        horarios  = ["05:35","06:13","07:30","09:00","12:33","14:23","15:05","15:55","17:40","19:45","21:18"];
             return horariosAux(horarios);
        break;
            case 4: //jueves
       horarios  = ["05:35","06:13","07:30","09:00","12:33","14:23","15:05","15:55","17:40","19:45","21:18"];
             return horariosAux(horarios);
        break;
            case 5: //viernes
       horarios  = ["05:35","06:13","07:30","09:00","12:33","14:23","15:05","15:55","17:40","19:45","21:18","22:45"];
             return horariosAux(horarios);
        break;
            case 6: //sabado
        horarios  = ["07:30","09:00","12:33","14:23","15:55","19:45","21:18"];
            return horariosAux(horarios);
        break;
            case 7: //domingo
        horarios  = ["06:45","11:00","15:15","19:00","20:50","22:30"];
             return horariosAux(horarios);
        break;
            
            
     
}
        
    return 0; 
   
}









function horariosAux(array){
    
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



bot.on('message', (msg) => {
 
    
     if (msg.text.toString().toLowerCase().indexOf("hola") === 0) {
     bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name+"!");
 }
    
    
    if (msg.text.toString().toLowerCase().indexOf("chau") === 0) {
     bot.sendMessage(msg.chat.id, "Nos re vimos!");
 }
 
    
    
    if (msg.text.toString().toLowerCase().indexOf("hora") === 0) {
     bot.sendMessage(msg.chat.id, "Hora actual: " +hora());
 }
    
    
 if (msg.text.toString().toLowerCase().indexOf("/desfe") === 0) {
     bot.sendMessage(msg.chat.id, "Proximas salidas desde SANTA FE: " +horariosDeSfe());
 }
 

if (msg.text.toString().toLowerCase().indexOf("/descc") === 0) {
     bot.sendMessage(msg.chat.id, "Proximas salidas desde SCC: " +horariosDeSCC());
 }
 });


var http = require("http");
setInterval(function() {
    http.get("http://elnortebot.herokuapp.com");
}, 1800000); //30 minutos
