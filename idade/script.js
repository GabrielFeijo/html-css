let nome = document.getElementById("name");
let idade = document.getElementById("idade");
let res = document.getElementById("res");
let age = document.getElementById("idades");
let contIdade = document.getElementById("cont_idade");
let ageB = document.getElementById("age_b");
let ageD = document.getElementById("age_d");

let maiorIdade = 0;
let maiorN;
let menorIdade = 140;
let menorN;
let dezoito = 0;

let count = 0;
function add(){
    if (nome.value.length == 0 && idade.value.length == 0){
        alert('Preencha as informações.');  
    }else if (idade.value < 0 || idade.value > 130){
        alert('Idade inválida. Informe uma idade de 0 - 130');
        idade.value = '';
    }else{
        count++;
        contIdade.innerHTML = `Pessoas Cadastradas: ${count}`
        res.innerHTML += `<p>Nome ${count}: ${nome.value}</p>`;
        age.innerHTML += `<p>Idade ${count}: ${idade.value}</p>`;
    
        document.getElementById('result').disabled = false;
        if (maiorIdade < idade.value){
            maiorIdade = idade.value;
            maiorN = nome.value;
        }
        if (menorIdade > idade.value){
            menorIdade = idade.value;
            menorN = nome.value;
        }
        if (idade.value >= 18){
            dezoito++
        }
        nome.value = '';
        idade.value = '';
    }
    
}
function results(){
    document.getElementById('wrap').style.display = 'none'
    document.getElementById('final').style.display = 'block'
    ageB.innerHTML += `<p>A pessoa com maior idade informada foi ${maiorN.toUpperCase()}</p>`
    ageB.innerHTML += `<p>A maior idade informada foi ${maiorIdade} anos</p>`
    ageB.innerHTML += `<p>A pessoa com menor idade informada foi ${menorN.toUpperCase()}</p>`
    ageB.innerHTML += `<p>A menor idade informada foi ${menorIdade} anos</p>`
    ageD.innerHTML += `<p>A quantidade de pessoas com idade maior ou igual a 18 anos foram de: ${dezoito} pessoas</p>`  


}

document.onkeydown = teclado;

function teclado(e){
    if (e.keyCode == 13){
        if (nome.value.length == 0 && idade.value.length == 0){
            alert('Preencha as informações.');  
        }else if (idade.value < 0 || idade.value > 130){
            alert('Idade inválida. Informe uma idade de 0 - 130');
            idade.value = '';
        }else{
            count++;
            contIdade.innerHTML = `Pessoas Cadastradas: ${count}`
            res.innerHTML += `<p>Nome ${count}: ${nome.value}</p>`;
            age.innerHTML += `<p>Idade ${count}: ${idade.value}</p>`;
        
            document.getElementById('result').disabled = false;
            if (maiorIdade < idade.value){
                maiorIdade = idade.value;
                maiorN = nome.value;
            }
            if (menorIdade > idade.value){
                menorIdade = idade.value;
                menorN = nome.value;
            }
            if (idade.value >= 18){
                dezoito++
            }
            nome.value = '';
            idade.value = '';
            nome.focus();
        }
    }
}