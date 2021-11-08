var slider = document.getElementById("range");
var output = document.getElementById("res");
let b1 = document.getElementById("b-1");
let b2 = document.getElementById("b-2");
let b3 = document.getElementById("b-3");
let car = document.getElementById('car');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + " Km/h";
  if(range.value > 0 && range.value <= 75){
    b1.style.backgroundColor = "green";
    b2.style.backgroundColor = "green";
    b3.style.backgroundColor = "green";
  
  }else if (range.value > 75 && range.value <= 100){
    b1.style.backgroundColor = "yellow";
    b2.style.backgroundColor = "yellow";
    b3.style.backgroundColor = "yellow";
 
  }else if(range.value > 100){
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "red";
    b3.style.backgroundColor = "red";

  }else{
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
  }
}
function velocidade(){
  if (range.value >= 0 && range.value <= 10){
    car.style.animationDuration = '10s';
  }else if (range.value > 10 && range.value <= 30){
    car.style.animationDuration = '8s';
  }else if (range.value > 30 && range.value <= 60){
    car.style.animationDuration = '7s';
  }else if (range.value > 60 && range.value <= 90){
    car.style.animationDuration = '6s';
  }else if (range.value > 90 && range.value <= 120){
    car.style.animationDuration = '5s';
  }else if (range.value > 120 && range.value <= 150){
    car.style.animationDuration = '4s';
  }else if (range.value > 150 && range.value <= 170){
    car.style.animationDuration = '3s';
  }
}
setInterval(velocidade, 100);