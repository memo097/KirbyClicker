var timer = -1;
var countdown= setInterval(bonus30s, 1000)


function start (){
    timer = 30
    console.log(timer)
}
function bonus30s (){
    if(timer == -1){
        clearTimeout(countdown);
        alert('test')
    }else{
    document.getElementById('chrono').innerHTML = timer +' S'
    timer --;
    }
}