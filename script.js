const canvas = document.getElementById('canvas')
const child = document.getElementById('child')

const motion = () => {
    const animations = [1, 2, 3, 4]
    setInterval(() => {
        let animation = animations[Math.round(Math.random()*3)]
        canvas.style.animation = `xAxis${animation} 3000ms linear`
        child.style.animation = `yAxis${animation} 3000ms ease-in-out`
    }, 3000)
}
motion()