var timer = 30;
var countdown= setInterval(timer, 1000)
var bonus = document.getElementById('chrono')
bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
bonus.addEventListener("click", function(){
var countdown = setInterval(function(){
    timer -- 
    bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
    if(timer == 0){
        bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
        clearInterval(countdown)
        timer=30
        bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
    }
}, 1000);
});