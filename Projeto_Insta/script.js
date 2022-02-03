 function instaname(){
     let user = window.prompt("Para uma melhor experiência informe seu Instagram sem @");
     let box_user = document.getElementById('user-name');
     let not_user = document.getElementById('not-user');

     box_user.innerHTML = `Continue como ${user}`
     box_user.href = `https://www.instagram.com/${user}/`;  
     not_user.innerHTML = `Não é ${user}?`
 }
 
 
let phone = document.getElementById('phone')
let num = 2

function Background(){
    phone.style.backgroundImage = `url(img/Fundo${num}.png)`;
    num++

    if (num == 7){
        num = 1
    }
}

setInterval(Background, 6000)