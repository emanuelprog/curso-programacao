function calcular() {
    let n1String = document.getElementById("n1").value
    let n2String = document.getElementById("n2").value

    let n1Convertido = parseFloat(n1String)
    let n2Convertido = parseFloat(n2String)

    let soma = n1Convertido + n2Convertido

    window.alert("O resultado da sua soma é: " + soma)
}

function subtrair() {
    let n1String = document.getElementById("n1").value
    let n2String = document.getElementById("n2").value

    let n1Convertido = parseFloat(n1String)
    let n2Convertido = parseFloat(n2String)

    let subtrair = n1Convertido - n2Convertido

    window.alert("O resultado da sua subtração é: " + subtrair)
}
function dividir() {
    let n1String = document.getElementById("n1").value
    let n2String = document.getElementById("n2").value

    let n1Convertido = parseFloat(n1String)
    let n2Convertido = parseFloat(n2String)

    let dividir = n1Convertido / n2Convertido

    window.alert("O resultado da sua subtração é: " + dividir)
}

function multiplicar() {
    let n1String = document.getElementById("n1").value
    let n2String = document.getElementById("n2").value

    let n1Convertido = parseFloat(n1String)
    let n2Convertido = parseFloat(n2String)

    let multiplicar = n1Convertido * n2Convertido

    window.alert("O resultado da sua subtração é: " + multiplicar)
}
