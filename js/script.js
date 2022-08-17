const lampada = document.getElementById('lampada')
const ligado = document.getElementById('ligar')
const desligado = document.getElementById('desligar')

function lampadaOn (){
    if (! isLampadaQuebrada ()){
    lampada.src = './img/ligada.jpg'
    }
}

function lampadaOff (){
    if (! isLampadaQuebrada ()){
        lampada.src = './img/desligada.jpg'
        }
}

function quebrarLampada(){
    lampada.src = './img/quebrada.jpg'
}

function isLampadaQuebrada(){
    return lampada.src.indexOf ( 'quebrada' ) > -1
}


ligado.addEventListener('click', lampadaOn)
desligado.addEventListener('click', lampadaOff)
lampada.addEventListener('mouseover', lampadaOn)
lampada.addEventListener('mouseleave', lampadaOff)
lampada.addEventListener('dblclick', quebrarLampada)