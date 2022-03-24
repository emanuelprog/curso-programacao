let imc = []

function calcular() {
    let pesoString = document.getElementById("caixa-peso").value
    let alturaString = document.getElementById("caixa-altura").value

    let pesoConvertido = parseFloat(pesoString)
    let alturaConvertido = parseFloat(alturaString)

    let calculo = pesoConvertido / (alturaConvertido * alturaConvertido)
    imc.push(calculo)

    if (pesoString == "") {
        alert("Preencha o Peso!")
    }
    if (alturaString == "") {
        alert("Preencha a Altura!")
    }
    
}

function classificar() {
    let tabelaDiv = document.getElementById("tabela")
    for (let i = 0; i < imc.length; i++) {
        tabelaDiv.innerHTML = `
        <div>
        <span id="situacao">${imc[i].toFixed(2)}</span>
        </div>
        `  
    }

    if (situacao.innerHTML < 18.5) {
        situacao.style = "color:yellow"
    }

    if (situacao.innerHTML > 18.5 && situacao.innerHTML < 24.9) {
        situacao.style = "color:green"
    }

    if (situacao.innerHTML > 24.9 && situacao.innerHTML < 30) {
        situacao.style = "color:blue"
    } 
    if (situacao.innerHTML > 30) {
        situacao.style = "color:red"
    }

    document.getElementById("caixa-peso").value = ""
    document.getElementById("caixa-altura").value = ""
}