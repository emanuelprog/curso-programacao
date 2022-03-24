let filmes = [
    {
        imagem: "https://www.nivelepico.com/wp-content/uploads/2017/06/photoshop-e-a-arte-de-fazer-posteres-09.jpg",
        titulo: "Homem Aranha:<br/>De Volta ao Lar"
    },

    {
        imagem: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22271-cartaz.jpg",
        titulo: "Vingadores:<br/>Guerra Infinita"
    },

    {
        imagem: "https://cdn.ome.lt/xBlrJHY892wtoQoU8ZDXBFFe6lA=/770x0/smart/uploads/conteudo/fotos/9_m6xLFHv.jpg",
        titulo: "Guardiões <br/>da Galaxia"
    },

    {
        imagem: "https://i.pinimg.com/736x/58/89/77/58897736affcc153ba0f196a25c04937.jpg",
        titulo: "Capitã <br/>Marvel "
    },

    {
        imagem: "https://1.bp.blogspot.com/-rsx7YLRwtzo/WBkGTkaM59I/AAAAAAAAoKA/Jz3wwD_qE5M16dcpkNfy0c8Z-iimkwTYACLcB/s1600/Doctor-Strange-Brazil-10Maio2016.jpg",
        titulo: "Doutor <br/>Estranho"
    },

    {
        imagem: "https://img.elo7.com.br/product/original/267720C/big-poster-filme-homem-de-ferro-3-lo03-tamanho-90x60-cm-homem-de-ferro-3.jpg",
        titulo: "Homem de <br/>Ferro"
    }
]

let filmesBkp

function criarCatalogo() {
    let sectionCatalogo = document.getElementById("catalogo")
    for (let i = 0; i < filmes.length; i++) {
        sectionCatalogo.innerHTML += `
        <div class="cartaz">
          <img src="${filmes[i].imagem}">     
          <p>${filmes[i].titulo}</p>
          <a href="file:///C:/Users/Emanuel/Desktop/CURSO%20PROGRAMA%C3%87%C3%83O/buscar-filmes/Inicio/detalhes/detalhes.html">
          <button>Ver Detalhes</button>
          </a> 
        </div>
        `
    }
}

function pesquisar() {
    let busca = document.getElementById("pesquisa").value
    filmesBkp = filmes
    filmes = filmes.filter((elemento) => {
        return elemento.titulo.toLowerCase().trim().includes(busca.toLowerCase().trim())
    })

    document.getElementById("catalogo").innerHTML = ""
    criarCatalogo()
}

function limpar() {
    let sectionCatalogo = document.getElementById("catalogo")
    filmes = filmesBkp
    sectionCatalogo.innerHTML = ""
    for (let i = 0; i < filmes.length; i++) {
        sectionCatalogo.innerHTML += `
        <div class="cartaz">
          <img src="${filmes[i].imagem}">     
          <p>${filmes[i].titulo}</p>
          <a href="file:///C:/Users/Emanuel/Desktop/CURSO%20PROGRAMA%C3%87%C3%83O/buscar-filmes/Inicio/detalhes/detalhes.html">
          <button>Ver Detalhes</button>
          </a> 
        </div>
        `
    }

    
        
}
