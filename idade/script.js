let nome = document.getElementById("name");
let idade = document.getElementById("idade");
let res = document.getElementById("res");
let age = document.getElementById("idades");
let contIdade = document.getElementById("cont_idade");
let ageB = document.getElementById("age_b");
let ageD = document.getElementById("age_d");
let lname = document.getElementById("names");

let maiorIdade = 0;
let menorIdade = 140;
let maiorN;
let menorN;
let maNome = 0;
let meNome = 999;
let maiorNome;
let menorNome;
let dezoito = 0;
let menor = 0;

let count = 0;
function add(){
    if (nome.value.length == 0 || idade.value.length == 0){
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
        if (maNome < nome.value.length){
            maNome = nome.value.length;
            maiorNome = nome.value;
        }
        if (meNome > nome.value.length){
            meNome = nome.value.length;
            menorNome = nome.value;
        }
        if (idade.value >= 18){
            dezoito++
        }else{
            menor++
        }
        nome.value = '';
        idade.value = '';
      
    }
    
}
function results(){
    document.getElementById('wrap').style.display = 'none'
    document.getElementById('final').style.display = 'block'
    ageB.innerHTML += `<p>A pessoa com maior idade informada foi ${maiorN.toUpperCase()}.</p>`
    ageB.innerHTML += `<p>A maior idade informada foi ${maiorIdade} anos.</p>`
    ageB.innerHTML += `<p>A pessoa com menor idade informada foi ${menorN.toUpperCase()}.</p>`
    ageB.innerHTML += `<p>A menor idade informada foi ${menorIdade} anos.</p>`
    lname.innerHTML += `<p>O nome com maior quantidade de caracteres foi: ${maiorNome} </p>`
    lname.innerHTML += `<p>A quantidade de caracteres foi: ${maNome} </p>`
    lname.innerHTML += `<p>O nome com menor quantidade de caracteres foi: ${menorNome} </p>`
    lname.innerHTML += `<p>A quantidade de caracteres foi: ${meNome} </p>`

    if (dezoito != 1){
        ageD.innerHTML += `<p>A quantidade de pessoas com idade maior ou igual a 18 anos foram de: ${dezoito} pessoas.</p>` 
    }else{
        ageD.innerHTML += `<p>A quantidade de pessoas com idade maior ou igual a 18 anos foi de: ${dezoito} pessoa.</p>` 
    } 
    if (menor != 1){
        ageD.innerHTML += `<p>A quantidade de pessoas com idade menor a 18 anos foram de: ${menor} pessoas.</p>`  
    }else{
        ageD.innerHTML += `<p>A quantidade de pessoas com idade menor a 18 anos foi de: ${menor} pessoa.</p>`   
    }

}

document.onkeydown = teclado;

function teclado(e){
    if (e.keyCode == 13){
        if (nome.value.length == 0 || idade.value.length == 0){
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
            if (maNome < nome.value.length){
                maNome = nome.value.length;
                maiorNome = nome.value;
            }
            if (meNome > nome.value.length){
                meNome = nome.value.length;
                menorNome = nome.value;
            }
            if (idade.value >= 18){
                dezoito++
            }else{
                menor++
            }
            nome.value = '';
            idade.value = '';
            nome.focus();
          
        }
    }
}
