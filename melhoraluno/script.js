let nome = document.getElementById('nome');
let nota = document.getElementById('nota');
let res = document.getElementById('res');
let maior = document.getElementById('maior');
let s = 0;
let melhorn, melhornome;

melhorn = 0;


function botao(){
  
    if (nome.value.length > 0 && nota.value.length >0){
        document.getElementById('adicionar').disabled = false;
    }else{
        document.getElementById('adicionar').disabled = true;
    }
    if ( res.innerHTML.length > 0 ){
        document.getElementById('resultado').disabled = false;
    }else{
        document.getElementById('resultado').disabled = true;
    }
 
}
setInterval(botao,100)


let testa = nota.value
function add(){
  
    if (nome.value.length > 0 && nota.value.length >0){
   
     
        res.innerHTML += `<p id='js-nome'>Nome: ${nome.value} <br>`;
        res.innerHTML += `Nota: ${nota.value} </p>`;
       s++
       document.getElementById('wrap').style.height = `250px`
       document.getElementById('wrap').style.marginTop = `-125px`
       document.getElementById('p-student').innerHTML = `Alunos Cadastrados = ${s}`
       document.getElementById('p-last').innerHTML = `Útimo Aluno(a) Cadastrado = ${nome.value}`
     
    }
    if ( (nota.value<10? nota.value = '0' + nota.value: nota.value ) > melhorn){
        melhorn = nota.value;  
        melhornome = nome.value;
    }
    nota.value = ''
    nome.value = ''
  
   
}
function resu(){
   maior.innerHTML = ""
    maior.innerHTML += `<p>O aluno com melhor nota foi: ${melhornome} <br>`;
    maior.innerHTML += `Com nota: ${melhorn} </p>`;
    res.style.display = 'block';
    document.getElementById('wrap').style.display = `none`;
    document.getElementById('s-two').style.display = `block`;
  
}
function resetar(){
    res.style.display = 'none';
    nota.value = '';
    nome.value = '';
    document.getElementById('wrap').style.height = `200px`;
    document.getElementById('wrap').style.marginTop = `-100px`;
    document.getElementById('p-student').innerHTML = ``;
    document.getElementById('p-last').innerHTML = ``;
    res.innerHTML = '';
    s = 0;
}
function voltar(){
    document.getElementById('wrap').style.display = `block`;
    document.getElementById('s-two').style.display = `none`;
}
