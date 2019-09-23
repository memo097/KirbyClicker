var timer = 30;
var score = 0;
var numbers = document.getElementById("numbers");
var cookie = document.getElementById("cookie");
var multiplier = 1;

var bonus = document.getElementById('chrono')
bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
bonus.addEventListener("click", function () {
    var countdown = setInterval(function () {
        timer--
        bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
        if (timer == 0) {
            bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
            clearInterval(countdown)
            timer = 30
            bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
        }
    }, 1000);
});



function cookieClick() {
    console.log(score)
   score = score + (1*multiplier);
   
numbers.textContent = score ;
}
function fire () {
    
    multiplier = 2; 
}
function water () {
   
    multiplier = 10;
}
function frost () {
   
    multiplier = 20;
}
function rainbow () {
   
    multiplier = 100;
}
