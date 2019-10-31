const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_BOT_TOKEN } = process.env;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true});
var date = new Date().toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"});
	


function hora(){
    date = new Date(date);
 var hour = date.getHours();
   hour = parseInt(hour);  
     hour = (hour < 10 ? "0" : "") + hour;
var min  = date.getMinutes();
   min = (min < 10 ? "0" : "") + min;
return 21 + ":" + 39;
}


function dia(){
    date = new Date();
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
       horarios  = ["05:30","06:45","10:10","12:00","13:00","14:00","15:50","18:00","18:45","19:45","21:05","22:30"];
             return horariosAux(horarios);
        break;
            case 6: //sabado
        horarios  = ["05:30","10:10","12:00","14:00","18:00","19:15","22:30"];
            return horariosAux(horarios);
        break;
            case 0: //domingo
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
            case 0: //domingo
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
    
    if(proximos.length == 0){
        return "No hay proximas salidas para hoy.";
        
    }else{
    return proximos; 
    }
}



bot.on('message', (msg) => {
 
    
     if (msg.text.toString().toLowerCase().indexOf("hola") === 0) {
    bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name+"!");
 }
    
    if (msg.text.toString().toLowerCase().indexOf("/web") === 0) {
		

		
     bot.sendMessage(msg.chat.id, "www.elnortesa.com.ar");
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
    
    
     if (msg.text.toString().toLowerCase().indexOf("/horarios") === 0) {
     bot.sendMessage(msg.chat.id, "Seleccione el origen /santafe o /scc");
 }
    
     if (msg.text.toString().toLowerCase().indexOf("/santafe") === 0) {
     bot.sendMessage(msg.chat.id, "Seleccione un día\n Lunes: /LunesSF \n Martes: /MartesSF \n Miércoles: /MiercolesSF \n Jueves: /JuevesSF \n Viernes: /ViernesSF \n Sábado: /SabadoSF \n Domingo: /DomingoSF");
 }
    if (msg.text.toString().toLowerCase().indexOf("/scc") === 0) {
     bot.sendMessage(msg.chat.id, "Seleccione un día\n Lunes: /LunesSCC \n Martes: /MartesSCC \n Miércoles: /MiercolesSCC \n Jueves: /JuevesSCC \n Viernes: /ViernesSCC \n Sábado: /SabadoSCC \n Domingo: /DomingoSCC");
 }
   
  //HORARIOS DESDE SFE   
    
     if (msg.text.toString().toLowerCase().indexOf("/lunessf") === 0) {
     bot.sendMessage(msg.chat.id, "LUNES | SFE -> SCC\n05:30\n06:45\n10:10\n12:00\n13:00\n14:00\n15:50\n18:00\n19:15\n21:05\n22:30");
 }
    if (msg.text.toString().toLowerCase().indexOf("/martessf") === 0) {
     bot.sendMessage(msg.chat.id, "MARTES | SFE -> SCC:\n05:30\n06:45\n10:10\n12:00\n13:00\n14:00\n15:50\n18:00\n19:15\n21:05\n22:30");
 }
    if (msg.text.toString().toLowerCase().indexOf("/miercolessf") === 0) {
     bot.sendMessage(msg.chat.id, "MIÉRCOLES | SFE -> SCC:\n05:30\n06:45\n10:10\n12:00\n13:00\n14:00\n15:50\n18:00\n19:15\n21:05\n22:30");
 }
    if (msg.text.toString().toLowerCase().indexOf("/juevessf") === 0) {
     bot.sendMessage(msg.chat.id, "JUEVES | SFE -> SCC:\n05:30\n06:45\n10:10\n12:00\n13:00\n14:00\n15:50\n18:00\n19:15\n21:05\n22:30");
 }
    if (msg.text.toString().toLowerCase().indexOf("/viernessf") === 0) {
     bot.sendMessage(msg.chat.id, "VIERNES | SFE -> SCC:\n05:30\n06:45\n10:10\n12:00\n13:00\n14:00\n15:50\n18:00\n18:45\n19:45\n21:05\n22:30");
 }
    if (msg.text.toString().toLowerCase().indexOf("/sabadosf") === 0) {
     bot.sendMessage(msg.chat.id, "SÁBADO | SFE -> SCC:\n05:30\n10:10\n12:00\n14:00\n18:00\n19:15\n22:30");
 }
    if (msg.text.toString().toLowerCase().indexOf("/domingosf") === 0) {
     bot.sendMessage(msg.chat.id, "DOMINGO | SFE -> SCC:\n08:30\n10:10\n13:30\n17:15\n20:30\n22:30\n23:45");
 }
    
    
     //HORARIOS DESDE SCC
    
         if (msg.text.toString().toLowerCase().indexOf("/lunesscc") === 0) {
     bot.sendMessage(msg.chat.id, "LUNES | SCC -> SFE:\n05:35\n06:13\n07:30\n09:00\n12:33\n14:23\n15:05\n15:55\n17:40\n19:45\n21:18");
 }
    if (msg.text.toString().toLowerCase().indexOf("/martesscc") === 0) {
     bot.sendMessage(msg.chat.id, "MARTES | SCC -> SFE:\n05:35\n06:13\n07:30\n09:00\n12:33\n14:23\n15:05\n15:55\n17:40\n19:45\n21:18");
 }
    if (msg.text.toString().toLowerCase().indexOf("/miercolesscc") === 0) {
     bot.sendMessage(msg.chat.id, "MIÉRCOLES | SCC -> SFE:\n05:35\n06:13\n07:30\n09:00\n12:33\n14:23\n15:05\n15:55\n17:40\n19:45\n21:18");
 }
    if (msg.text.toString().toLowerCase().indexOf("/juevesscc") === 0) {
     bot.sendMessage(msg.chat.id, "JUEVES | SCC -> SFE:\n05:35\n06:13\n07:30\n09:00\n12:33\n14:23\n15:05\n15:55\n17:40\n19:45\n21:18");
 }
    if (msg.text.toString().toLowerCase().indexOf("/viernesscc") === 0) {
     bot.sendMessage(msg.chat.id, "VIERNES | SCC -> SFE:\n05:35\n06:13\n07:30\n09:00\n12:33\n14:23\n15:05\n15:55\n17:40\n19:45\n21:18\n22:45");
 }
    if (msg.text.toString().toLowerCase().indexOf("/sabadoscc") === 0) {
     bot.sendMessage(msg.chat.id, "SÁBADO | SCC -> SFE:\n07:30\n09:00\n12:33\n14:23\n15:55\n19:45\n21:18");
 }
    if (msg.text.toString().toLowerCase().indexOf("/domingoscc") === 0) {
     bot.sendMessage(msg.chat.id, "DOMINGO | SCC -> SFE:\n06:45\n11:00\n15:15\n19:00\n20:50\n22:30");
 }
    
    
    
 });




var http = require("http");
setInterval(function() {
    http.get("http://elnortebot.herokuapp.com");
}, 1800000); //30 minutos