var timer = 30;
var countdown= setInterval(bonus30s, 1000)

function bonus30s (){
    if(timer == -1){
        clearTimeout(countdown);
        alert('test')
    }else{
    document.getElementById('chrono').innerHTML = timer +' S'
    timer --;
    }
}