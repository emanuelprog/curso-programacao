function celsius() {
    let celsius = document.getElementById("grauDigitado").value

    celsius = celsius / 5 

    alert("o valor em celcius é " + celsius + "°")

}

function fahrenheit() {
    let fahrenheit = document.getElementById("grauDigitado").value

    fahrenheit = fahrenheit - 32 / 9

    alert("o valor em fahrenheit é " + fahrenheit.toFixed(2) + "°")
}