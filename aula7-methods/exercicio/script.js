let lista = []

let listaBkp


function adicionar() {
    let sectionLista2 = document.getElementById("adicionar-buscar").value
    lista.push(sectionLista2)
    let sectionLista = document.getElementById("lista")
    if (sectionLista2 == "") {
        alert("Preencha o Campo Vazio!")
    } else {
        sectionLista.innerHTML += `
                <div class="tarefas">
                <ul>${sectionLista2}</ul>
                </div>
                `
        document.getElementById("adicionar-buscar").value = ""
    }
}

function buscar() {
    let busca = document.getElementById("adicionar-buscar").value
    let sectionLista = document.getElementById("lista")
    listaBkp = lista
    lista = lista.filter((elemento) => {
        return elemento.toLowerCase().trim().includes(busca.trim().toLowerCase())
    })
    sectionLista.innerHTML = ""
    for (let i = 0; i < lista.length; i++) {
        sectionLista.innerHTML += `
            <div class="tarefas">
            <ul>${lista[i]}</ul>
            </div>
            `
    }
    document.getElementById("adicionar-buscar").value = ""
}

function limpar() {
    lista = listaBkp
    let sectionLista = document.getElementById("lista")
    sectionLista.innerHTML = ""
    for (let i = 0; i < lista.length; i++) {
        sectionLista.innerHTML += `
            <div class="tarefas">
            <ul>${lista[i]}</ul>
            </div>
            `
    }
}
