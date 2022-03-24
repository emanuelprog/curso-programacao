let receitas = []
let despesas = []

let totalReceitas = 0
let totalDespesas = 0


function adicionarReceita() {
    let receitaString = document.getElementById("receita").value

    let receitaConvertido = parseFloat(receitaString)

    receitas.push(receitaConvertido)

    totalReceitas = totalReceitas + receitaConvertido

    calcularBalanco()
}

function adicionarDespesa() {
    let despesaString = document.getElementById("despesa").value

    let despesaConvertido = parseFloat(despesaString)

    receitas.push(despesaConvertido)

    totalDespesas = totalDespesas + despesaConvertido

    calcularBalanco()
}

function calcularBalanco() {
    let resultadoBalanco = totalReceitas - totalDespesas

    let spanReceita = document.getElementById("resultadoReceita")
    spanReceita.innerText = "R$ " + totalReceitas.toFixed(2)
    spanReceita.style = "color:green"

    let spanDespesa = document.getElementById("resultadoDespesa")
    spanDespesa.innerText = "R$ " + totalDespesas.toFixed(2)
    spanDespesa.style = "color:red"

    let spanBalanco = document.getElementById("resultadoBalanco")
    spanBalanco.innerText = "R$ " + resultadoBalanco.toFixed(2)

    if (resultadoBalanco >= 0) {
        spanBalanco.style = "color:green"
      } else {
        spanBalanco.style = "color:red"
      }
    
      console.log("Lista de receitas: " + resultadoReceita)
      console.log("Lista de despesas: " + resultadoDespesa)
    
      console.log("Balanço: " + resultadoBalanco)
    
} 