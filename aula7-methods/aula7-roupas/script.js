let produtos = [
    {
        valor: 89.99,
        imagem: "https://cf.shopee.com.br/file/5d6debac3c439e25a928352808226375",
        descricao: "Vestido Vermelho"
    },
    {
        valor: 99.99,
        imagem: "https://cf.shopee.com.br/file/5ec10ed168c77d023d2f54231e5d24f8",
        descricao: "Vestido Preto e Branco"
    },
    {
        valor: 109.99,
        imagem: "https://images.tcdn.com.br/img/img_prod/497460/camiseta_basica_branca_1151_1_565df92cf3776e8d70e8b674b5434b4c.jpeg",
        descricao: "Camiseta Branca"
    },
    {
        valor: 119.99,
        imagem: "https://d3ugyf2ht6aenh.cloudfront.net/stores/913/539/products/blusa-retilinea-mescla-rocket-camisetas-nuvem-111-663e118151788dbf7816362997364626-320-0.jpg",
        descricao: "Camiseta Cinza"
    },
    {
        valor: 129.99,
        imagem: "https://static.dafiti.com.br/p/PKD-Concept-Cal%C3%A7a-Slouchy-PKD-Jeans-2372-5181856-1-zoom.jpg",
        descricao: "Calça Estilosa"
    },
    {
        valor: 139.99,
        imagem: "https://a-static.mlcdn.com.br/618x463/calca-jeans-feminina-jogger-cos-elastico-blogueira-jog01-opa-linda/opalinda/13253358126/f4f210c8f55374466b21a1889be8f2b1.jpg",
        descricao: "Calça Jogger"
    }
    
]

let produtosBkp

function criaCatalogo() {
    let sectionCatalogo = document.getElementById("catalogo")
    for (let i = 0; i < produtos.length; i++) {
        sectionCatalogo.innerHTML += `
        <div class="produto">
            <img src="${produtos[i].imagem}">
           <div class="produto-detalhe">
           <p class="produto-titulo">${produtos[i].descricao}</p>
           <p class="produto-valor">R$${produtos[i].valor}</p>
           </div>
        </div>
        `
    }
}

function buscar() {
    let busca = document.getElementById("busca").value
    produtosBkp = produtos
    produtos = produtos.filter((elemento) => {
        return elemento.descricao.toLowerCase().includes(busca.toLowerCase())
    })
    document.getElementById("catalogo").innerHTML = ""
    criaCatalogo()
}

function limpar() {
    produtos = produtosBkp
    document.getElementById("catalogo").innerHTML = ""
    criaCatalogo()
}