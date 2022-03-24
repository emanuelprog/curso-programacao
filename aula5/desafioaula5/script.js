function tornarMaiuscula() {

    let texto = document.getElementById("texto").value
    
    alert(texto.toUpperCase())
    

}

function tornarMinuscula() {

    let texto = document.getElementById("texto").value

    alert(texto.toLowerCase())

}

function contar() {
    
    let texto = document.getElementById("texto").value

    alert("O Texto digitado tem " + texto.length + " caracteres")
}