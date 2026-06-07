const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';

    for (let i=0; i<6 ;i++){
        color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalID;

const startChangingColor = function(){
    if(!intervalID){
        intervalID = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)
    }
}

const StopChangingColor = function(){
    clearInterval(intervalID)
    intervalID = null;
}
start.addEventListener('click',startChangingColor);
stop.addEventListener('click',StopChangingColor);