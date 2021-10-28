

function contar(){
   let salario = document.getElementById('salario');
   let p = document.getElementById('porce');
   let res = document.getElementById('res');


   let valor = salario.value*(p.value/100);
   let total = salario.value - valor;

   res.innerHTML = ''
   res.innerHTML += (`<p>O valor de ${p.value}% de seu salário é ${valor.toFixed(2)}</p> `);
   res.innerHTML += (`<p>O salário no valor de ${salario.value} - ${valor.toFixed(2)}</p>`);
   res.innerHTML += (`<p>É igual a ${total.toFixed(2)}</p>`);

   
}