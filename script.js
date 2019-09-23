var timer = 30;
var bonus = document.getElementById('chrono')
var bonusclick = 0
bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
bonus.addEventListener("click", function(){
    bonus.disabled = true
var countdown = setInterval(function(){
    timer -- 
    bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
    if(timer == 0){
        bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
        clearInterval(countdown)
        bonus.disabled = false
        timer=30
        bonus.innerHTML = "bonus mutiplicateur X2 " + timer + " Seconde"
    }
}, 1000);
});