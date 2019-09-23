var timer = 30;
var score = 0;
var numbers = document.getElementById("numbers");
var cookie = document.getElementById("bigCanvas");
var multiplier = 1;

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

var life = 10;

var bonus = document.getElementById('chrono')
bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
if(score < 5000 ){
    bonus.disabled = true
}else if (score >= 5000){
    bonus.disabled = false
}
console.log(score, 1)
bonus.addEventListener("click", function(){
    bonus.disabled = true
    score = score - 5000
    multiplier = multiplier*2
var countdown = setInterval(function(){
    timer -- 
    bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
    if(timer == 0){
        bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
        clearInterval(countdown)
        if(score < 5000 ){
            bonus.disabled = true
        }else if (score >= 5000){
            bonus.disabled = false
        }
        timer=10
        bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
        multiplier = multiplier/2
    }
}, 1000);
});

document.querySelector(".main-container").onclick=(e)=>gameover(e)
document.querySelector(".game-life").innerHTML = life
function gameover(e){
    if(!e.path[0].id.includes("bigCanvas")){
        life--
        if(life==0){
            document.querySelector(".game-over").style.animation="gameOver 1s ease-in forwards"
            document.querySelector(".gif-retry").style.animation="gifRetry 4s ease-in forwards 1s"
            document.querySelector(".gif-retry button").style.animation="buttonRetry 4s ease-in 1s"
            document.querySelector(".main-container").onclick=(e)=false

        }
    }else{
        console.log(life)
    }
    document.querySelector(".game-life").innerHTML = life
}
function tryAgain(){
    document.location.reload()
}
