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
var multiplier = 1;
const main = document.querySelector(".main-container")
var counter = 0
const currentScore = document.getElementById('current-score')
const bestScore = document.getElementById('best-score')
const musicFire = document.getElementById("musicFire");
const musicWater = document.getElementById("musicWater");
const musicFrost = document.getElementById("musicFrost");
const musicRainbow = document.getElementById("musicRainbow");
const transferButton = document.getElementById('transfer')
const chronoText = document.getElementById('chrono-text')
const speaker = document.querySelector('.speaker')
var kirbyClick1 = document.getElementById("kirbyClick");
var musicStart1 = document.getElementById("musicStart");
var pointGain=document.getElementById("pointGain");
var gameOverMusic = document.getElementById("gameOverMusic");
var curtainFall = document.getElementById("end");
const miss = document.getElementById('miss')
const replay = document.getElementById('replay')
const blackWindow = document.getElementsByClassName('black-window')[0]
const playAgain = document.getElementById('play-again')
var soundStop = true;
var heartKey = false
let volumeLevel = 0.7

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
transferButton.disabled = true

document.getElementById("autoclick").disabled = true

document.getElementById("buyLifeButton").disabled = true;

if (score < 5) document.getElementById("bonusclick").disabled = true
else document.getElementById("bonusclick").disabled = false

musicFrost.volume = 0.3
gameOverMusic.volume = 0.5
const setVolume = () => {
    musicFire.volume = volumeLevel
    musicWater.volume = volumeLevel
    musicRainbow.volume = volumeLevel
    musicStart1.volume = volumeLevel
    kirbyClick1.volume = volumeLevel
    pointGain.volume = volumeLevel
    curtainFall.volume = volumeLevel
    miss.volume = volumeLevel
    replay.volume = volumeLevel
}
setVolume()

speaker.onclick = () => {
    if (speaker.src.includes('speaker.svg')) {
        speaker.src = speaker.src.replace('speaker.svg', 'speaker-off.png')
        volumeLevel = 0
        musicFrost.volume = 0
        gameOverMusic.volume = 0
    } else {
        speaker.src = speaker.src.replace('speaker-off.png', 'speaker.svg')
        volumeLevel = 0.7
        musicFrost.volume = 0.3
        gameOverMusic.volume = 0.5
    }
    console.log(speaker.src)
    setVolume()
}

const motion = () => {
    const animations = [1, 2, 3, 4]
    setInterval(() => {
        let animation = animations[Math.round(Math.random() * 3)]
        canvasContainer.style.animation = `xAxis${animation} 4000ms linear`
        cookie.style.animation = `yAxis${animation} 4000ms ease-in-out`
    }, 4000)
}
motion()

const transfer = () => {
    pointGain.play()
    score -= 10000
    currentScore.textContent = parseInt(currentScore.textContent) + 100
    numbers.textContent = score
    if (score < 10000) {transferButton.disabled = true; transferButton.classList.add('disabled-orange')}
    handleHtml()
}

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
    musicWater.pause();
    musicFrost.pause();
    musicRainbow.pause();
    handleHtml()
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
    musicFrost.pause();
    musicRainbow.pause();
    handleHtml()
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
    musicRainbow.pause();
    handleHtml()
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
    handleHtml()
}
function bonusclicker(){
    pointGain.play()
    score = score - 5
    numbers.textContent = score
    bonusclick = bonusclick + 200
    clictime *= 2
    if (score < 10 || bonusclick === 600) {document.getElementById("bonusclick").disabled = true; document.getElementById("bonusclick").classList.add('disabled-orange')}
    else {document.getElementById("bonusclick").disabled = false; document.getElementById("bonusclick").classList.remove('disabled-orange')}
    handleHtml()
}
function autoclicker(){
    pointGain.play()
    let clictimeStore = clictime
    document.getElementById("autoclick").disabled = true
    document.getElementById("autoclick").classList.add('disabled-orange')
    autoactif = true
    score = score - 20
    numbers.textContent = score
var durerclick = setInterval(function(){
    myCanvas1.click()
    clictime--
    if(clictime==0){
    clearInterval(durerclick)
    clictime= clictimeStore
    if(score < 20) {document.getElementById("autoclick").disabled = true; document.getElementById("autoclick").classList.add('disabled-orange')}
    else {document.getElementById("autoclick").disabled = false; document.getElementById("autoclick").classList.remove('disabled-orange')}
    if(parseInt(currentScore.textContent) > 1000) document.getElementById("autoclick").disabled = true
    autoactif = false
    }
},1000-bonusclick)
    handleHtml()
}

bonus.addEventListener("click", function () {
    bonus.disabled = true
    actif = true
    score = score - 50
    numbers.textContent = score
    multiplier = multiplier * 2
    if (score < 50) {bonus.disabled = true; bonus.classList.add('disabled-red')}
    else bonus.disabled = false
    var countdown = setInterval(function () {
        timer--
        chronoText.innerHTML = "Stars x2 (" + timer + " s)"
        chronoText.innerHTML = "Stars x2 (" + timer + " s)"
        if (timer == 0) {
            actif = false
            chronoText.innerHTML = "Stars x2 (" + timer + " s)"
            clearInterval(countdown)
            if (score < 50) bonus.disabled = true
            else {bonus.disabled = false; bonus.classList.remove('disabled-red')}
            timer = 30
            chronoText.innerHTML = "Stars x2 (" + timer + " s)"
            multiplier = multiplier / 2
        }
    }, 1000)
    handleHtml()
})

main.onclick = (e) => gameover(e);
   
document.querySelector(".game-life").innerHTML = `x${life}`
function gameover(e) {
    if (!e.path[0].id.includes('myCanvas')) {
        life--
        document.querySelector(".game-life").innerHTML = `x${life}`
        miss.play()
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
            kirbyClick1.volume = 0
            soundStop = false
            //music - game over
            
            setTimeout(() => {
                curtainFall.play();
            }, 200 )
            setTimeout(() => {
                gameOverMusic.play();
            }, 1500 )


            
            //continuation of previous code
            if (parseInt(currentScore.textContent) > parseInt(bestScore.textContent)) {
                window.localStorage.setItem('best', currentScore.textContent)
            }
        }
    } else {
        score = score + (1 * multiplier);
        currentScore.textContent = parseInt(currentScore.textContent) + 1
        counter++
        document.querySelector("#bigCanvas").innerHTML = document.querySelector("#bigCanvas").innerHTML + `<img class = "star" id="${counter}" src="images/star.png"></img>`
        document.querySelector("#bigCanvas").innerHTML = document.querySelector("#bigCanvas").innerHTML + `<img class = "star" id="${counter}" src="images/star.png"></img>`
        var random = Math.round(Math.random())
        setTimeout(function () {
            
            document.getElementById(`${counter}`).style.animation = `${(random % 2 === 0 ? 'falling' : 'falling2')} 0.2s ease-in-out`;
            document.getElementById(`${counter}`).remove

        }, 100)

        var alea = Math.round(Math.random() * 100)
        if(alea === 15 && heartKey == false) freelife()

        handleHtml()
    }
    document.querySelector(".game-life").innerHTML = `x${life}`
    }

const handleHtml = () => {
    numbers.textContent = score;

    if (score < 10000) {transferButton.disabled = true; transferButton.classList.add('disabled-orange')}
    else {transferButton.disabled = false; transferButton.classList.remove('disabled-orange')}

    if (score < 100 || fireState || waterState || frostState || rainbowState) {fires.disabled = true; fires.classList.add('disabled')}
    else {fires.disabled = false; fires.classList.remove('disabled')}
    if (score < 300 || waterState || frostState || rainbowState) {waters.disabled = true; waters.classList.add('disabled')}
    else {waters.disabled = false; waters.classList.remove('disabled')}
    if (score < 700 || frostState || rainbowState) {frosts.disabled = true; frosts.classList.add('disabled')}
    else {frosts.disabled = false; frosts.classList.remove('disabled')}
    if (score < 1500 ) {rainbows.disabled = true; rainbows.classList.add('disabled')}
    else {rainbows.disabled = false; rainbows.classList.remove('disabled')}

    if (score < 50 || actif) {bonus.disabled = true; bonus.classList.add('disabled-red')}
    else {bonus.disabled = false; bonus.classList.remove('disabled-red')}

    if (score < 20 || autoactif) {document.getElementById("autoclick").disabled = true; document.getElementById("autoclick").classList.add('disabled-orange')}
    else {document.getElementById("autoclick").disabled = false; document.getElementById("autoclick").classList.remove('disabled-orange'); console.log(document.getElementById("autoclick").className)}
    if(parseInt(currentScore.textContent) > 250) document.getElementById("autoclick").disabled = true
    if (score < 10 ) {document.getElementById("bonusclick").disabled = true; document.getElementById("bonusclick").classList.add('disabled-orange')}
    else {document.getElementById("bonusclick").disabled = false; document.getElementById("bonusclick").classList.remove('disabled-orange')}
    if (bonusclick === 600) {document.getElementById("bonusclick").disabled = true; document.getElementById("bonusclick").classList.add('disabled-orange')}
    if(parseInt(currentScore.textContent) > 1000) {document.getElementById("bonusclick").disabled = true; document.getElementById("bonusclick").classList.add('disabled-orange')}
    
    if (score < 100) {document.getElementById("buyLifeButton").disabled = true; document.getElementById("buyLifeButton").classList.add('disabled-orange')}
    else {document.getElementById("buyLifeButton").disabled = false; document.getElementById("buyLifeButton").classList.remove('disabled-orange')}

    canvas()
}

function tryAgain() {
    replay.play()
    playAgain.className = 'play-again-selected'
    blackWindow.style.animation = 'blackWindow 3s linear forwards'
    setTimeout(() => {
        document.location.reload()
    }, 3000)
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
        pointGain.play(); //sound at point gain
        score = score - 100;
        numbers.textContent = score;
        document.querySelector(".game-life").innerHTML = `x${life}`
        if (score < 100) {document.getElementById("buyLifeButton").disabled = true; document.getElementById("buyLifeButton").classList.add('disabled-orange')}
        handleHtml()
}

//MOUSIC
//music START on Click of Main Field
canvasContainer.onclick = () => musicStart()

function musicStart() {
    if (soundStop) {
        musicStart1.play()
    }
}

//music - click Kirby
bigCanvas.onclick = () => kirbyClick()

function kirbyClick() {
    kirbyClick1.play ();
}

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
