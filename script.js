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
    if((!e.path[0].id.includes("bigCanvas")) || (!e.path[0].id.includes("myCanvas"))){
        life--
        console.log(e.path[0].id);
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

 // Canvas Kirby
 var c1 = document.getElementById("myCanvas1");
 var ctx = c1.getContext("2d");


 //body
 ctx.beginPath();
 ctx.arc(100, 100, 100, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "pink";
 ctx.fill();

 //EYES
 //up-left - elipse
 ctx.beginPath();
 ctx.ellipse(80, 80, 10, 30, Math.PI / 1, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "black";
 ctx.fill();
 //up-right - elipse
 ctx.beginPath();
 ctx.ellipse(120, 80, 10, 30, Math.PI / 1, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "black";
 ctx.fill();
 //small WHITE PUPILS
 //up-left - elipse
 ctx.beginPath();
 ctx.ellipse(80, 65, 5, 10, Math.PI / 1, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "white";
 ctx.fill();
 //up-right - elipse
 ctx.beginPath();
 ctx.ellipse(120, 65, 5, 10, Math.PI / 1, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "white";
 ctx.fill();
 //small BLUE PUPILS
 //up-left - elipse
 ctx.beginPath();
 ctx.ellipse(80, 93, 8, 10, Math.PI / 9, 0, 1 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "blue";
 ctx.fill();
 //up-right - elipse
 ctx.beginPath();
 ctx.ellipse(120, 93, 8, 10, Math.PI / -9, 0, 1 * Math.PI); //-9 turns down, 1 - makes half elipse
 ctx.stroke();
 ctx.fillStyle = "blue";
 ctx.fill();

 //MOUTH
 ctx.beginPath();
 ctx.ellipse(100, 125, 10, 15, Math.PI / 1, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "brown";
 ctx.fill();
 //tongue
 ctx.beginPath();
 ctx.ellipse(100, 127, 8, 10, Math.PI / -5, 0, 1.5 * Math.PI); //-9 turns down, 1 - makes half elipse
 ctx.stroke();
 ctx.fillStyle = "#F08080"; //warm pink
 ctx.fill();

 //CHEEKS
 ctx.beginPath();
 ctx.ellipse(60, 120, 20, 10, Math.PI / 6, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "#F08080"; //warm pink
 ctx.fill();
 //2nd cheek
 ctx.beginPath();
 ctx.ellipse(150, 120, 20, 10, Math.PI / -6, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = "#F08080"; //warm pink
 ctx.fill();


 //OTHER CANVAS

 //HANDS & FEET
 //CANVAS-2 //up-left - elipse
 var c2 = document.getElementById("myCanvas2");
 var ctx2 = c2.getContext("2d");

 ctx2.beginPath();
 ctx2.ellipse(40, 35, 30, 40, Math.PI / 1.5, 0, 2 * Math.PI);
 ctx2.stroke();
 ctx2.fillStyle = "pink";
 ctx2.fill();

 //CANVAS-3 //up-right - elipse
 var c3 = document.getElementById("myCanvas3");
 var ctx3 = c3.getContext("2d");

 ctx3.beginPath();
 ctx3.ellipse(35, 35, 30, 40, Math.PI / -1.5, 0, 2 * Math.PI);
 ctx3.stroke();
 ctx3.fillStyle = "pink";
 ctx3.fill();

 //FEET
 //CANVAS-4 //down-left - elipse
 var c4 = document.getElementById("myCanvas4");
 var ctx4 = c4.getContext("2d");

 ctx4.beginPath();
 ctx4.ellipse(50, 35, 30, 50, Math.PI / 4, 0, 2 * Math.PI);
 ctx4.stroke();
 ctx4.fillStyle = "#bf0000";
 ctx4.fill();


 //CANVAS-5 - down-right - elipse
 var c5 = document.getElementById("myCanvas5");
 var ctx5 = c5.getContext("2d");

 ctx5.beginPath();
 ctx5.ellipse(35, 35, 30, 50, Math.PI / -4, 0, 2 * Math.PI);
 ctx5.stroke();
 ctx5.fillStyle = "#bf0000"; //dark red
 ctx5.fill();

 //CANVAS END
 
