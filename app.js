function mostrarMensaje(palabra){
    const elemento = document.querySelector(".instruccion")
    elemento.innerText = `El numero secreto es ${palabra}`
}

function mensajeGanador(resultado,palabra){
    let container = document.querySelector(".container")
    let input = document.querySelector(".numero-usuario")
    let parrafo = document.createElement("p")
    parrafo.innerText = resultado
    parrafo.className = "mensaje"

    console.log(parrafo)
    input.parentNode.replaceChild(parrafo, input)
    container.style.gridTemplateAreas = '"instruccion instruccion" "mensaje mensaje" "juego reiniciar"'

    const instruccion = document.querySelector(".instruccion")
    instruccion.innerText = palabra
}

function limpiarCaja(){
    document.querySelector(".numero-usuario").value = ""
}

function reiniciarJuego(){
    document.querySelector(".instruccion").innerText = "Adivina el número secreto del 1 al 10. Tienes 3 intentos"
    
    let parrafo = document.querySelector(".mensaje")
    console.log(parrafo)
    let input = document.createElement("input")
    input.setAttribute("type","text")
    input.setAttribute("placeholder", "Ingresé un número")
    input.className = "numero-usuario"
    let container = document.querySelector(".container")
    parrafo.parentNode.replaceChild(input, parrafo)
    container.style.gridTemplateAreas = '"instruccion instruccion" "numero numero" "juego reiniciar"'

    numeroSecreto = Math.floor(Math.random()*10)+1
    contador = 0
}

let numeroSecreto = Math.floor(Math.random()*10)+1
let contador = 0
function jugar(){
    const confetti = new JSConfetti()
    let numeroUsuario = parseInt(document.querySelector(".numero-usuario").value)
    contador++

    if(numeroSecreto == numeroUsuario){
        mensajeGanador("¡GANASTE!",`Lo lograste en ${contador} ${contador > 1 ? "intentos" : "intento"}`)
        document.querySelector(".reiniciar").removeAttribute("disabled")
        confetti.addConfetti()
    } else if (contador == 3){
        mensajeGanador("¡PERDISTE!", "Se acabaron los intentos")
        document.querySelector(".reiniciar").removeAttribute("disabled")
    } else if (numeroSecreto > numeroUsuario){
        mostrarMensaje("mayor")
        limpiarCaja()
    } else if (numeroSecreto < numeroUsuario){
        mostrarMensaje("menor")
        limpiarCaja()
    }

}