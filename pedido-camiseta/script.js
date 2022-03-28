let camisetas = []

let valorP = 10
let valorM = 12
let valorG = 15

let camisetaEdicao

function salvar() {
    let camisetaSalvada = {}

    if (camisetaEdicao != null) {
        camisetaSalvada = camisetaEdicao
    }

    camisetaSalvada.qtdP = document.getElementById("camisetaP").value
    camisetaSalvada.qtdM = document.getElementById("camisetaM").value
    camisetaSalvada.qtdG = document.getElementById("camisetaG").value
    camisetaSalvada.total = (camisetaSalvada.qtdP * valorP) +
        (camisetaSalvada.qtdM * valorM) + (camisetaSalvada.qtdG * valorG)

    if (camisetaSalvada.qtdP == "" && camisetaSalvada.qtdM == "" && camisetaSalvada.qtdG == "") {
        alert("Preencha o campo vazio!")
        return
    }

    if (camisetaEdicao != null) {
        var posicao = camisetas.indexOf(camisetaEdicao)
        camisetas.splice(posicao, 1)
        camisetas.splice(posicao, 0, camisetaEdicao);
        alert("Pedido editado com sucesso!")
    } else {
        camisetas.push(camisetaSalvada)
        alert("Pedido feito com sucesso!")
    }

    listarCamisetas()

    document.getElementById("camisetaP").value = ""
    document.getElementById("camisetaM").value = ""
    document.getElementById("camisetaG").value = ""

    somar()
    camisetaEdicao = null
}

function somar() {
    let valorTotal = 0
    for (let i = 0; i < camisetas.length; i++) {
        valorTotal = valorTotal + camisetas[i].total
    }
    divTotal = document.getElementById("divTotal")
    divTotal.innerHTML = `<span>R$: ${valorTotal.toFixed(2).replace(".", ",")}`
}

function listarCamisetas() {
    let tabelaCliente = document.getElementById("tabelaPedidos")

    tabelaCliente.innerHTML = ""

    for (let i = 0; i < camisetas.length; i++) {
        tabelaCliente.innerHTML += `
        <tr>
            <td>${camisetas[i].qtdP}</td>
            <td>${camisetas[i].qtdM}</td>
            <td>${camisetas[i].qtdG}</td>
            <td>R$${camisetas[i].total}</td>
            <td><button id="excluir" onclick="excluir(${i})">Excluir</button></td>
            <td><button id="editar" onclick="editar(${i})">Editar</button></td>
        </tr>
        `
    }
}

function excluir(posicao) {
    if (confirm("Tem certeza que deseja excluir este pedido?")) {
        camisetas.splice(posicao, 1)
        listarCamisetas()
    }

    somar()
}

function editar(posicao) {
    let camiseta = camisetas[posicao]

    document.getElementById("camisetaP").value = camiseta.qtdP
    document.getElementById("camisetaM").value = camiseta.qtdM
    document.getElementById("camisetaG").value = camiseta.qtdG
    camisetaEdicao = camiseta
}