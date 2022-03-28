let numeros = []

function adicionarNumero() {
    let stringNumeros = document.getElementById("entradaNumeros").value

    let numerosConvertido = parseFloat(stringNumeros)

    numeros.push(numerosConvertido)
    
    document.getElementById("numerosAdicionados").innerText = numeros.join(", ")

    document.getElementById("entradaNumeros").value = ""
}

function ordenar() {

    for (let i = 0; i < numeros.length; i++) {
        let j = i + 1
        while (j < numeros.length) {
            let aux
            if (numeros[i] > numeros[j]) {
                aux = numeros[i]
                numeros[i] = numeros[j]
                numeros[j] = aux
                
            } 
            j++
        }
    } 
    document.getElementById("numerosOrdenados").innerText = numeros
}

