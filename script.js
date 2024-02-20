let tiempo = 0;
let intervalo;
let estaPausado = true;
let factorVelocidad = 1;

const cronometro = document.getElementById('cronometro');
const velocidadSlider = document.getElementById('velocidad');
const iniciarPausarBtn = document.getElementById('iniciarPausar');
const reiniciarBtn = document.getElementById('reiniciar');


velocidadSlider.oninput = function() {
    factorVelocidad = parseInt(this.max) + 1 - parseInt(this.value); 
}

function actualizarTiempo() {
    tiempo += 1;
    const horas = Math.floor(tiempo / 36000);
    const minutos = Math.floor((tiempo - (horas * 36000)) / 600);
    const segundos = Math.floor((tiempo - (horas * 36000) - (minutos * 600)) / 10);
    const decimas = tiempo % 10;
    
    cronometro.textContent = 
        `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}:${decimas.toString().padStart(2, '0')}`;
}

iniciarPausarBtn.onclick = function() {
    if (estaPausado) {
        intervalo = setInterval(actualizarTiempo, 100 * factorVelocidad); // Ajustamos la velocidad de actualización basada en el factor.
        estaPausado = false;
    } else {
        clearInterval(intervalo);
        estaPausado = true;
    }
}

reiniciarBtn.onclick = function() {
    clearInterval(intervalo);
    tiempo = 0;
    actualizarTiempo();
    estaPausado = true;
}


actualizarTiempo();

