var timer = 30;
var countdown= setInterval(timer, 1000)

function timer (){
    if(timer == -1){
        clearTimeout(countdown);
        alert('test')
    }else{
    document.getElementById('chrono').innerHTML = timer +' S'
    timer --;
    }
}