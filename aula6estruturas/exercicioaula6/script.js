let notas = []
let maiorNota = 0
let menorNota = 0
let notaSubstituta = 0
let media = 0
let somaNotas = 0


function adicionarNota() {

  let stringNotas = document.getElementById("entradaNotas").value

  let notaConvertida = parseFloat(stringNotas)

  if (stringNotas == "") {
    alert("Preencha a nota!")
  } else {
    if (notaConvertida < 0 || notaConvertida > 10) {
      alert("A nota deve estar entre 0 e 10!")
    } else {

      notas.push(notaConvertida)
      document.getElementById("notasAdicionadas").innerText = notas.join(", ")
    }
    document.getElementById("entradaNotas").value = ""
  }
}

function finalizar() {
  document.getElementById("caixa1").style = "display:none"
  document.getElementById("caixa2").style = "display:block"
  document.getElementById("notas1").style = "display:none"
  document.getElementById("notas2").style = "display:block"
  document.getElementById("resultado-caixa").style = "display:block"

  document.getElementById("notas").innerText = notas.join(", ")

  let stringNotas = document.getElementById("entradaNotas").value

  let notaConvertida = parseFloat(stringNotas)

  notas.push(notaConvertida)


  for (let i = 0; i < notas.length; i++) {
    
  } if (notaConvertida > maiorNota) {
      maiorNota = notaConvertida
    }

    if (notaConvertida < menorNota) {
      menorNota = notaConvertida
    }
    somaNotas = somaNotas + notaConvertida 
    media = somaNotas / notas.length
    Imprimir()
  }
  


function Imprimir() {

  if (media < 4) {
    situacaoAluno.innerText = "Reprovado"
    situacaoAluno.style = "color:red"
  } else if (media >= 4 && media < 7) {
    situacaoAluno.innerText = "Recuperação"
    situacaoAluno.style = "color:yellow"
  } else {
    situacaoAluno.innerText = "Aprovado"
    situacaoAluno.style = "color:green"
  }

  document.getElementById("maiorNota").innerText = maiorNota
  document.getElementById("menorNota").innerText = menorNota
  document.getElementById("media").innerText = media.toFixed(2)

}



