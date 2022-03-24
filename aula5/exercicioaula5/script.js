function substituir() {

    let frase = document.getElementById("texto").value

    let busca = document.getElementById("busca").value
   
    let substituta = document.getElementById("substituta").value
    
    document.getElementById("texto").value = frase.replaceAll(busca, substituta)

}