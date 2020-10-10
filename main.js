setInterval(function() {
    var horaAtual = new Date()
    var hora = horaAtual.getHours()
    var minuto = horaAtual.getMinutes()
    var segundo = horaAtual.getSeconds()

    minuto = adjustTime(minuto)
    segundo = adjustTime(segundo)

//textContent retorna os childs tbm    
document.querySelector('.clock').innerHTML = `${hora}:${minuto}:${segundo}`;
}, 1000)

function adjustTime(x) {
    if(x < 10) {
        
        x = '0' + x;
    }
    return x;
};