 function instaname(){
     var user = window.prompt("Para uma melhor experiência informe seu Instagram sem @");
     var box_user = document.getElementById('user-name');
     var not_user = document.getElementById('not-user');

     box_user.innerHTML = `Continue como ${user}`
     box_user.href = `https://www.instagram.com/${user}/`;  
     not_user.innerHTML = `Não é ${user}?`
 }
 
 


function Background(){
    var phone = document.getElementById('phone')
    var num = 2
    phone.style.backgroundImage = `url(img/Fundo${num}.png)`;
    num++

    if (num == 7){
        num = 1
    }
}

setInterval(Background, 6000)