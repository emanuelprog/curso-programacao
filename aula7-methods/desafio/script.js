let cardapio = []

let cardapioBkp

function adicionar() {
    let produto = {
        imagem: document.getElementById("imagem").value,
        descricao: document.getElementById("descricao").value,
        valor: document.getElementById("valor").value,
        entrega: document.getElementById("input-frete1").checked
    }

    if (produto.descricao == "") {
        alert("Preencha o campo descrição!")
        return
    }
    if (produto.valor == "") {
        alert("Preencha o campo valor!")
        return
    }
    if (produto.imagem == "") {
        alert("Preencha o campo imagem!")
        return
    }
    
    if (cardapio == undefined) {
        cardapio = []
    }
    cardapio.push(produto)


    let sectionCardapio = document.getElementById("pratos")
        sectionCardapio.innerHTML += `
        <div class="prato">
        <div class="prato-detalhe">
        <img src="${produto.imagem}">
        <p class="prato-titulo">${produto.descricao}</p>
        <p class="prato-valor">R$${produto.valor}</p>
        <p class="prato-entrega">${produto.entrega == true ? 'Entrega grátis':''}</p>
        </div>
        </div>
        ` 
        
        document.getElementById("imagem").value = ""
        document.getElementById("descricao").value = ""
        document.getElementById("valor").value = ""
        document.getElementById("input-frete1").checked = ""
 
}

function filtrar() {

let busca = document.getElementById("caixa-busca").value
let buscafrete = document.getElementById("input-frete2").checked
let sectionCardapio = document.getElementById("pratos")
cardapioBkp = cardapio
cardapio = cardapio.filter((elemento) => {
    if(buscafrete == true) {
        return elemento.descricao.toLowerCase().trim().includes(busca.toLowerCase().trim()) && elemento.entrega == true
     } else {
         return elemento.descricao.toLowerCase().trim().includes(busca.toLowerCase().trim())
     }
})

sectionCardapio.innerHTML = ""
for (let i = 0; i < cardapio.length; i++) {
sectionCardapio.innerHTML += `
        <div class="prato">
        <div class="prato-detalhe">
        <img src="${cardapio[i].imagem}">
        <p class="prato-titulo">${cardapio[i].descricao}</p>
        <p class="prato-valor">R$${cardapio[i].valor}</p>
        <p class="prato-entrega">${cardapio[i].entrega == true ? 'Entrega grátis':''}</p>
        </div>
        </div>
        ` 

    }
    document.getElementById("caixa-busca").value = ""
}

function limpar() {
    let sectionCardapio = document.getElementById("pratos")
    cardapio = cardapioBkp
    sectionCardapio.innerHTML = ""
    if (cardapio.length > 0) {  
        for (let i = 0; i < cardapio.length; i++) {
            sectionCardapio.innerHTML += `
                    <div class="prato">
                    <div class="prato-detalhe">
                    <img src="${cardapio[i].imagem}">
                    <p class="prato-titulo">${cardapio[i].descricao}</p>
                    <p class="prato-valor">R$${cardapio[i].valor}</p>
                    <p class="prato-entrega">${cardapio[i].entrega == true ? 'Entrega grátis':''}</p>
                    </div>
                    </div>
                    ` 
    }
    
   }
   
}

