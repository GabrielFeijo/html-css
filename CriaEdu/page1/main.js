function recoverPass(){
    let wrap = document.getElementsByClassName('wrap')[0];
    let pass = document.getElementById('r-pass');
    wrap.style.display = 'none';
    pass.style.display = 'block';
}
function home(){
    let wrap = document.getElementsByClassName('wrap')[0];
    let pass = document.getElementById('r-pass');
    let sucess = document.getElementById('sucess');
    pass.style.display = 'none';
    sucess.style.display = 'none';
    wrap.style.display = 'block';
}
var msg = false
function sendmail(){
 let mail = document.getElementById('r-mail');

 if (mail.value.length != 0){
    let pass = document.getElementById('r-pass');
    let sucess = document.getElementById('sucess');
    let cmail = document.getElementById('cl-mail');
    cmail.innerHTML = mail.value;
    pass.style.display = 'none';
    sucess.style.display = 'block';
 
 }else{
    let error = document.getElementById('error-mail');
    error.innerHTML = 'Preencha a lacuna com o e-mail de recuperação.';

    if (msg == false){
        msg = true
        setInterval(function(){
            error.innerHTML = ''
            msg = false
        }, 5000)
    }
 

 }

}
function redirecionar(){
    let mail = document.getElementById('mail')
    let pass = document.getElementById('pass')
    let text = document.getElementById('pass-text')
    if (mail.value.length > 2 && pass.value.length > 7){
        window.open("../page2/index.html",'_blank').focus()
    }
}