function sair(){
    if (variavel == undefined){
    window.location = "../index.html"
    }
}

let lnam = document.getElementById('lnome')

function nome(){
 lnam.innerHTML = 'Olá, ' + variavel
}
setInterval(nome, 1)


function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

var variavel = queryString("Nome");





let day = new Date();
let dia = day.getDate();
let mes = new Array();
mes[0] = "01";
mes[1] = "02";
mes[2] = "03";
mes[3] = "04";
mes[4] = "05";
mes[5] = "06";
mes[6] = "07";
mes[7] = "08";
mes[8] = "09";
mes[9] = "10";
mes[10] = "11";
mes[11] = "12";
var n = mes[day.getMonth()];
let year = day.getFullYear();


let dd = document.getElementById('data');

function mos(){
    dd.innerHTML = `Data: ${dia}/${n}/${year}`

}
mos();
function rel(){
  let hda = new Date();
  let hora = hda.getHours();
  let min = hda.getMinutes();
   let hh = document.getElementById('hora');
  hh.innerHTML = `Hora: ${hora}:${min}`
}
setInterval(rel,1000)
document.getElementById("music").volume = 0.5;

let cora = document.getElementById('core');
let clic = false;

function coree(){
    if (clic == false){
  clic = true
  cora.src = '../image/core.png'
  document.getElementById('tama').innerHTML = '300.001 curtidas nesta música.'
    }else{
        cora.src = '../image/original.png'
        clic = false
        document.getElementById('tama').innerHTML = '300.000 curtidas nesta música.'
    }
 
}
function excore(){
    if (clic == false){
 cora.src = '../image/original.png'
    }
 
}
function ecore(){
  
 cora.src = '../image/core.png'
    
 
}
let msg1 = false;
let msg2 = false;

let b1 = document.getElementById('boy') 
let b2 = document.getElementById('boy2')

let l1 = document.getElementById('gg2')
let l2 = document.getElementById('gg3')

let text = document.getElementById('text')
function envio(){
 if(msg1 == false && text.value.length > 0){
     b1.style.display = 'block'
     l1.style.display = 'block'
     l1.innerHTML = text.value
     msg1 = true
     text.value = ''
 }else if(msg2 == false  && text.value.length > 0){
    b2.style.display = 'block'
    l2.style.display = 'block'
    l2.innerHTML = text.value
    msg1 = true
    msg2 = true
    text.value = ''
 }
 text.value = ''
}


