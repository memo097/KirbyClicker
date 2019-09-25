var bonusclick = 0;
var clictime = 10;
var autoactif = false;
var actif = false;
var timer = 30;
var score = 0;        //score should be 0 for a start, increase to check functionalities
var numbers = document.getElementById("numbers");
var cookie = document.getElementById("bigCanvas");
const canvasContainer = document.getElementById('canvas-container')
var life = 10;
var bonus = document.getElementById('chrono')
bonus.innerHTML = "Score Pts. x2 (" + timer + " s)"
var multiplier = 1;
const main = document.querySelector(".main-container")
var counter = 0
const currentScore = document.getElementById('current-score')
const bestScore = document.getElementById('best-score')
const musicFire = document.getElementById("musicFire");
const musicWater = document.getElementById("musicWater");
const musicFrost = document.getElementById("musicFrost");
const musicRainbow = document.getElementById("musicRainbow");
var soundStop = true;

var heartKey = false

if (window.localStorage.getItem('best')) bestScore.textContent = window.localStorage.getItem('best')

var fires = document.querySelector(".button-fire")
var waters = document.querySelector(".button-water")
var frosts = document.querySelector(".button-frost")
var rainbows = document.querySelector(".button-rainbow")
var fireState = false;
var waterState = false;
var frostState = false;
var rainbowState = false


bonus.disabled = true
fires.disabled = true
waters.disabled = true
frosts.disabled = true
rainbows.disabled = true


document.getElementById("autoclick").disabled = true


document.getElementById("buyLifeButton").disabled = true;

if (score < 5) document.getElementById("bonusclick").disabled = true
else document.getElementById("bonusclick").disabled = false

const motion = () => {
    const animations = [1, 2, 3, 4]
    setInterval(() => {
        let animation = animations[Math.round(Math.random() * 3)]
        canvasContainer.style.animation = `xAxis${animation} 4000ms linear`
        cookie.style.animation = `yAxis${animation} 4000ms ease-in-out`
    }, 4000)
}
motion()

function fire() {

    score = score - 30
    numbers.textContent = score
    multiplier = 2;
    main.style.backgroundImage = 'url("images/background-fire.jpg")'
    cookie.style.boxShadow = '0 0 100px 50px rgb(230, 30, 40)'
    fires.disabled = true
    fireState = true
    fires.classList.add('disabled')
    soundStop=false; // stops musicStart
    musicStart1.pause();
    musicFire.play();
    musicFire.volume = 0.7;       //sets lower volume
    musicWater.pause();
    musicFrost.pause();
    musicRainbow.pause();

   
}
function water() {
    score = score - 100
    numbers.textContent = score
    multiplier = 5;
    main.style.backgroundImage = 'url("images/background-water.jpg")'
    cookie.style.boxShadow = '0 0 100px 50px rgb(80, 50, 160)'
    waters.disabled = true
    waterState = true
    fires.classList.add('disabled')
    waters.classList.add('disabled')
    soundStop=false; // stops musicStart
    musicStart1.pause();
    musicFire.pause();
    musicWater.play();
    musicWater.volume = 0.7;       //sets lower volume
    musicFrost.pause();
    musicRainbow.pause();
}
function frost() {
    score = score - 500
    numbers.textContent = score
    multiplier = 10;
    main.style.backgroundImage = 'url("images/background-ice.jpg")'
    cookie.style.boxShadow = '0 0 100px 50px rgb(100, 250, 230)'
    frosts.disabled = true
    frostState = true
    fires.classList.add('disabled')
    waters.classList.add('disabled')
    frosts.classList.add('disabled')
    soundStop=false; // stops musicStart
    musicStart1.pause();
    musicFire.pause();
    musicWater.pause();
    musicFrost.play();
    musicFrost.volume = 0.7;       //sets lower volume
    musicRainbow.pause();
}
function rainbow() {
    score = score - 1000
    numbers.textContent = score
    multiplier = multiplier +30;
    main.style.backgroundImage = 'url("images/background-final.gif")'
    cookie.style.boxShadow = '0 0 100px 50px rgb(200, 70, 200)'
    rainbows.disabled = true
    rainbowState = true
    fires.classList.add('disabled')
    waters.classList.add('disabled')
    frosts.classList.add('disabled')
    rainbows.classList.add('disabled')
    soundStop=false; // stops musicStart
    musicStart1.pause();
    musicFire.pause();
    musicWater.pause();
    musicFrost.pause();
    musicRainbow.play();
    musicRainbow.volume = 0.7;       //sets lower volume
}
function bonusclicker(){
    score = score - 5
    numbers.textContent = score
    bonusclick = bonusclick + 200
    clictime *= 2
    if (bonusclick === 600) document.getElementById("bonusclick").disabled = true
    else document.getElementById("bonusclick").disabled = false
    if (score < 5) document.getElementById("bonusclick").disabled = true
    else document.getElementById("bonusclick").disabeld = false
    console.log(bonusclick)
}
function autoclicker(){
    let clictimeStore = clictime
    document.getElementById("autoclick").disabled = true
    autoactif = true
    score = score - 200
    numbers.textContent = score
var durerclick = setInterval(function(){
    myCanvas1.click()
    clictime--
    if(clictime==0){
    clearInterval(durerclick)
    clictime= clictimeStore
    if(score < 200) document.getElementById("autoclick").disabled = true
    else document.getElementById("autoclick").disabled = false
    if(parseInt(currentScore.textContent) > 250) document.getElementById("autoclick").disabled = true
    autoactif = false
    }
},1000-bonusclick)
}

bonus.addEventListener("click", function () {
    bonus.disabled = true
    actif = true
    score = score - 5000
    numbers.textContent = score
    multiplier = multiplier * 2
    var countdown = setInterval(function () {
        timer--
        bonus.innerHTML = "Score Pts. x2 (" + timer + " s)"
        clearInterval(countdown)
        if (score < 5000) bonus.disabled = true
        else bonus.disabled = false
        timer = 30
        actif = false
        bonus.innerHTML = "Score Pts. x2 (" + timer + " s)"
        if (timer == 0) {
            bonus.innerHTML = "Score Pts. x2 (" + timer + " s)"
            clearInterval(countdown)
            if (score < 5000) bonus.disabled = true
            else bonus.disabled = false
            timer = 10
            bonus.innerHTML = "Score Pts. x2 (" + timer + " s)"
            multiplier = multiplier / 2
        }
    }, 1000)
})

main.onclick = (e) => gameover(e);
   
document.querySelector(".game-life").innerHTML = `x${life}`
function gameover(e) {
    if (!e.path[0].id.includes('myCanvas')) {
        life--
        document.querySelector(".game-life").innerHTML = `x${life}`
        if(life==0){
            document.querySelector(".game-over").style.animation="gameOver 700ms ease-in-out forwards"
            document.querySelector(".gif-retry").style.animation="gifRetry 3s ease-in forwards 700ms"
            document.querySelector(".gif-retry button").style.animation="buttonRetry 3s ease-in 700ms"
            document.querySelector(".main-container").onclick=(e)=false
            //Pauses music at gameover
            musicStart1.pause();
            musicFire.pause();
            musicWater.pause();
            musicFrost.pause();
            musicRainbow.pause();
            //music - game over
            var gameOverMusic = document.getElementById("gameOverMusic");
            var curtainFall = document.getElementById("end");
            curtainFall.play();
            setTimeout(() => {
                curtainFall.play();
            }, 600 )
            setTimeout(() => {
                gameOverMusic.play();
                gameOverMusic.volume=0.5;
            }, 1500 )


            
            //continuation of previous code
            if (parseInt(currentScore.textContent) > parseInt(bestScore.textContent)) {
                window.localStorage.setItem('best', currentScore.textContent)
            }
        }
    } else {
        score = score + (1 * multiplier); 
        numbers.textContent = score;
       
       
        if (score < 1 || fireState) {fires.disabled = true; fires.classList.add('disabled')}
        else {fires.disabled = false; fires.classList.remove('disabled')}
        if (score < 1 || waterState) {waters.disabled = true; waters.classList.add('disabled')}
        else {waters.disabled = false; waters.classList.remove('disabled')}
        if (score < 1 || frostState) {frosts.disabled = true; frosts.classList.add('disabled')}
        else {frosts.disabled = false; frosts.classList.remove('disabled')}
        if (score < 1 ) {rainbows.disabled = true; rainbows.classList.add('disabled')}
        else {rainbows.disabled = false; rainbows.classList.remove('disabled')}
        if (score < 1 || actif) bonus.disabled = true
        else bonus.disabled = false
        currentScore.textContent = parseInt(currentScore.textContent) + 1
        counter++
        document.querySelector("#bigCanvas").innerHTML = document.querySelector("#bigCanvas").innerHTML + `<img class = "star" id="${counter}" src="images/star.png"></img>`
        var random = Math.round(Math.random())
        setTimeout(function () {
            
            document.getElementById(`${counter}`).style.animation = `${(random % 2 === 0 ? 'falling' : 'falling2')} 0.2s ease-in-out`;
            document.getElementById(`${counter}`).remove

        }, 100)
        
        if (score < 1 || autoactif) document.getElementById("autoclick").disabled = true
        else document.getElementById("autoclick").disabled = false
        if(parseInt(currentScore.textContent) > 250) document.getElementById("autoclick").disabled = true
        if (score < 1 ) {document.getElementById("bonusclick").disabled = true; console.log(55)}
        else document.getElementById("bonusclick").disabled = false
        if (bonusclick === 600) document.getElementById("bonusclick").disabled = true
        if(parseInt(currentScore.textContent) > 300) document.getElementById("bonusclick").disabled = true
        
        if (score >=1) document.getElementById("buyLifeButton").disabled = false;
        else document.getElementById("buyLifeButton").disabled = true;
        var alea = Math.round(Math.random() * 100)
        if(alea === 15 && heartKey == false) freelife()
        console.log(heartKey)
        canvas()
    }
    document.querySelector(".game-life").innerHTML = `x${life}`
    }

function tryAgain() {
    document.location.reload()
}

function freelife (){
    var pointGain=document.getElementById("pointGain");
    heartKey = true
    life++;
    pointGain.play();
    document.querySelector("#bigCanvas").innerHTML = document.querySelector("#bigCanvas").innerHTML  + `<img id="freelife" src="images/hearth.gif_c200" alt="coeur tournant"></img`
        document.getElementById('freelife').style.animation= 'fallinglife 0.2s forwards'
 setTimeout(function(){
    document.getElementById('freelife').remove()
    numbers.textContent = score;
    heartKey = false
   },250)
}
//buyLife function

function buyLife() {
        life++;
        var pointGain=document.getElementById("pointGain");
        pointGain.play(); //sound at point gain
        score = score - 10;
        numbers.textContent = score;
        document.querySelector(".game-life").innerHTML = `x${life}`
        if (score < 10) document.getElementById("buyLifeButton").disabled = true;
}

//MOUSIC
//music START on Click of Main Field
canvasContainer.onclick = () => musicStart()
var musicStart1 = document.getElementById("musicStart");
musicStart1.volume = 0.7;       //sets lower volume

function musicStart() {
    if (soundStop==true) {
        musicStart1.play()
    }
}

//music - click Kirby
bigCanvas.onclick = () => kirbyClick()
var kirbyClick1 = document.getElementById("kirbyClick");

function kirbyClick() {
    kirbyClick1.play ();
}

//music - click out of Kirby
/* main-container.onclick = () => miss()
var miss1 = document.getElementById("miss");

function miss() {
    miss1.play();
}  */



function canvas() {

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
}
canvas()
