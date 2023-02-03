const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

function isLampbroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
        if (!isLampbroken()) {
        lamp.src = './img/ligada.png'
    }
}

function lampOff() {
    if (!isLampbroken()) {
        lamp.src = './img/desligada.png'
    }    
}

function lampBroken() {
    lamp.src = './img/quebrada.png'
}

function lampOnOff() {
    if (!isLampbroken()) {

        if (lamp.src.indexOf('desligada') > -1) {
            lamp.src = './img/ligada.png' 
        } else if (lamp.src.indexOf('ligada') > -1)  {
            lamp.src = './img/desligada.png'
        } 
    }    
} 

turnOnOff.addEventListener("click", lampOnOff)

lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("click", lampBroken) 