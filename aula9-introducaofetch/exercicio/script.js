
let min = 0
let seg = 0


const formato = () => new Promise(resolve => setTimeout(() => resolve(), 100))
async function iniciar(cronometro = 0) {
   const minutosSegundos = await formato(cronometro)
   document.getElementById("relogio").innerText = minutosSegundos
   iniciar(cronometro + timer())
   clearTimeout()
}

function timer() {
    
    let cronometroLimite = document.getElementById("tempo").value
    seg++
    if (seg == 60) {
        seg = 0
        min++
    }

    if (min == cronometroLimite) {
        min = 0
    }

    let formato = (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg)

    document.getElementById("relogio").innerText = formato

}

