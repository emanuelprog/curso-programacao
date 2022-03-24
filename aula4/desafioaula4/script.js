let notas = []

let totalNotas = 0
let maiorNota = 0
let menorNota = 0

function adicionarNota() {
    let stringNotas = document.getElementById("entradaNotas").value

    let notasConvertido = parseFloat(stringNotas)

    notas.push(notasConvertido)

    document.getElementById("notas").innerText = notas

    document.getElementById("entradaNotas").value = ''

    document.getElementById("maiorNota").innerText = Math.max.apply(Math, notas)

    document.getElementById("menorNota").innerText = Math.min.apply(Math, notas)

    let media = notas.reduce((media, nota) => media + nota, 0) / notas.length;

    document.getElementById("media").innerText = media.toFixed(1)

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

    
}

