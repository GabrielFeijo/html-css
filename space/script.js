let m2 = document.getElementById('m2');
let m3 = document.getElementById('m3');

mm = false;
mn = false;

function most(){
    if (mm == false){
        m2.style.display = 'block';
        mm = true;
        m3.style.display = 'none';
        mn = false;
    }
     
}
function see(){
    if (mn == false){
        m3.style.display = 'block';
        mn = true;
        m2.style.display = 'none';
        mm = false;
    }
     
}


function fechar(){
    if (mm == true){
        m2.style.display = 'none';
        mm = false;
    } 
    if (mn == true){
        m3.style.display = 'none';
        mn = false;
    }
     
}





let nome = document.getElementById('name');
let resume = document.getElementById('resume');
let planet = document.getElementById('img-planet');
let planet1 = document.getElementById('planet-1');
let planet2 = document.getElementById('planet-2');
let planet3 = document.getElementById('planet-3');

function jupiter(){
  nome.innerHTML = 'JÚPITER'
  resume.innerHTML = 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno.Júpiter emite duas vezes mais calor do que ele absorve do Sol, o que indica que ele possui sua própria fonte interna de calor. Os astrônomos estimam que a temperatura central seja de 20.000 graus Celsius, cerca de três vezes maior que a temperatura do centro da Terra.'
  planet.src = 'https://cdn.pixabay.com/photo/2013/07/12/18/36/jupiter-153563_960_720.png'
  planet1.style.textDecoration = 'none'
  planet2.style.textDecoration = 'underline'
  planet3.style.textDecoration = 'none'
}
function marte(){
  nome.innerHTML = 'MARTE'
  resume.innerHTML = 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada. A temperatura varia desde -125 graus Celsius no inverno Marciano até 22 graus Celsius no verão Marciano. A atmosfera Marciana é composta de mais de 95% de dióxido de carbono.'
  planet.src = 'http://jovemastronomo.wikidot.com/local--files/marte/marte-planeta.gif'
  planet1.style.textDecoration = 'underline'
  planet2.style.textDecoration = 'none'
  planet3.style.textDecoration = 'none'

}
function lua(){
  nome.innerHTML = 'LUA'
  resume.innerHTML = 'A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra, o que representa ¹⁄₈₁ da sua massa. A Lua encontra-se em rotação sincronizada com a Terra, mostrando sempre a mesma face visível, marcada por mares vulcânicos escuros entre montanhas cristalinas e proeminentes crateras de impacto. É o mais brilhante objeto no céu a seguir ao Sol, embora a sua superfície seja na realidade escura, com uma refletância pouco acima da do asfalto.'
  planet.src = 'https://cdn.pixabay.com/photo/2016/04/02/19/40/moon-1303512_960_720.png'
  planet1.style.textDecoration = 'none'
  planet2.style.textDecoration = 'none'
  planet3.style.textDecoration = 'underline'
  
}


c1 = document.getElementById('circle1');
c2 = document.getElementById('circle2');
c3 = document.getElementById('circle3');
fgt = document.getElementById('foguete')


function cc1(){
    c1.style.backgroundColor = 'white'
    c1.style.color = 'rgb(18, 18, 19)'
    c1.style.fontWeight = '700'
    c2.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    c2.style.color = 'white'
    c2.style.fontWeight = '300'
    c3.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    c3.style.color = 'white'
    c3.style.fontWeight = '300'
    fgt.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Surveyor_1_launch.jpg/1200px-Surveyor_1_launch.jpg'
    
}
function cc2(){
    c2.style.backgroundColor = 'white'
    c2.style.color = 'rgb(18, 18, 19)'
    c2.style.fontWeight = '700'
    c1.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    c1.style.color = 'white'
    c1.style.fontWeight = '300'
    c3.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    c3.style.color = 'white'
    c3.style.fontWeight = '300'
    fgt.src = 'https://cdn.britannica.com/s:575x450/61/201461-004-02CAC191.jpg'
    
}
function cc3(){
    c3.style.backgroundColor = 'white'
    c3.style.color = 'rgb(18, 18, 19)'
    c3.style.fontWeight = '700'
    c2.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    c2.style.color = 'white'
    c2.style.fontWeight = '300'
    c1.style.backgroundColor = 'rgba(255, 255, 255, 0)'
    c1.style.color = 'white'
    c1.style.fontWeight = '300'
    fgt.src = 'https://super.abril.com.br/wp-content/uploads/2021/07/orcl-foguete_site.jpg'
    
}


