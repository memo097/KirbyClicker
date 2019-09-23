var timer = 10;
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
    }
}, 1000);

});