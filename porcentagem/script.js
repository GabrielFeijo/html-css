let salario = document.getElementById('salario');
let p = document.getElementById('porce');
let res = document.getElementById('res');

let valor;
let total;


function contar(){
   valor = salario.value*(p.value/100);
   total = salario.value - valor;

   if (salario.value.length > 0 && p.value.length > 0 ){
      document.getElementById('inicio').style.display = 'none'
      document.getElementById('botao-2').style.display = 'block'
      res.innerHTML = ''
      res.innerHTML += (`<p>O valor de ${p.value}% de seu salário é ${valor.toFixed(2)}</p> `);
      res.innerHTML += (`<p>O salário no valor de ${salario.value} - ${valor.toFixed(2)}</p>`);
      res.innerHTML += (`<p>É igual a ${total.toFixed(2)}</p>`);
   }

   
}
function voltar(){
   document.getElementById('inicio').style.display = 'block'
   res.innerHTML = ''
   document.getElementById('botao-2').style.display = 'none'
}

document.onkeydown = teclado;

function teclado(e){
   valor = salario.value*(p.value/100);
   total = salario.value - valor;
   if (e.keyCode == 13){
  
   
      if (salario.value.length > 0 && p.value.length > 0 ){
         document.getElementById('inicio').style.display = 'none'
         document.getElementById('botao-2').style.display = 'block'
         res.innerHTML = ''
         res.innerHTML += (`<p>O valor de ${p.value}% de seu salário é ${valor.toFixed(2)}</p> `);
         res.innerHTML += (`<p>O salário no valor de ${salario.value} - ${valor.toFixed(2)}</p>`);
         res.innerHTML += (`<p>É igual a ${total.toFixed(2)}</p>`);  
      }

   }
   if (e.keyCode == 27){
      document.getElementById('inicio').style.display = 'block'
      res.innerHTML = ''
      document.getElementById('botao-2').style.display = 'none'
   }
}