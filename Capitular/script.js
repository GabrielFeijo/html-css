let res = document.getElementById('res');
let txt = document.getElementById('text');

function mostra(){

    res.innerHTML =  txt.value.substring(0,1).toUpperCase() + txt.value.substring(1,txt.value.lenght).toLowerCase()  ;

}
setInterval(mostra,10);