let all = window.document.getElementById('wrap')
let two = window.document.getElementById('login')
let ope = document.getElementById('open')
let cd = document.getElementById('cad')
let nt = document.getElementById('notifi')
let login = false

function criar(){
    if (login == false){
    all.style.display = 'none'
    ope.style.display = 'none'
    two.style.display = 'block'
    }
}


function exit(){
    all.style.display = 'block'
    two.style.display = 'none'
    ope.style.display = 'none'
    form.innerHTML = ''
}
function enter(){
    all.style.display = 'none'
    two.style.display = 'none'
    ope.style.display = 'block'
    form.innerHTML = ''
}

let n = document.getElementById('nome')
let e = document.getElementById('mail')
let p = document.getElementById('pass')
let rp = document.getElementById('rpass')
let wh = document.getElementById('what')
function save(){
    

    if (p.value == rp.value && n.value.length > 0 && e.value.length > 0 && p.value.length > 7 && rp.value.length > 7){
        all.style.display = 'block'
        two.style.display = 'none'
        wh.innerHTML = 'Conta cadastrada com sucesso, basta entrar com seu EMAIL e SENHA para verificar seu perfil e começar a ouvir seus PodCasts favoritos.'
        wh.style.color = 'green'
        login = true
    }else{
        window.alert('Faltam Dados')
    }
}

function test(){
 let pe = document.getElementById('pp')
    pe.innerHTML = ''
   
    if (p.value != rp.value){
        pe.innerHTML += 'As senhas não coincidem '
    }else{
        pe.innerHTML = ''
    }
    if (p.value.length < 8 && rp.value.length < 8 && p.value.length > 0 ){
        pe.innerHTML += '| Senha Curta'
    }
    

}
setInterval(test, 10)

let mm = document.getElementById('may')
let ss = document.getElementById('sen')
let form = document.getElementById('checkb')


function eu(valor){
    if(e.value == mm.value && ss.value == p.value && mm.value.length > 0 && ss.value.length > 0 && n.value.length > 0 && login == true){

        window.location = "page2/index.html?Nome="+valor;
        form.innerHTML = ''
     
    }else{
        
        form.innerHTML = 'Login ou senha inválidos'
    }
}





