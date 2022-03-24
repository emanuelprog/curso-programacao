let clientes = []

function salvar() {
    let novaPessoa = {
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,
        sexo: document.getElementById("sexo").value,
        cep: document.getElementById("cep").value,
        logradouro: document.getElementById("logradouro").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value
    }

    clientes.push(novaPessoa)

    if (novaPessoa.nome == "") {
        alert("Preencha o campo Nome!")
        return
    }
    if (novaPessoa.idade == "") {
        alert("Preencha o campo Idade!")
        return
    }
    if (novaPessoa.sexo == "") {
        alert("Preencha o campo Sexo!")
        return
    }
    if (novaPessoa.cep == "") {
        alert("Preencha o campo Cep!")
        return
    }
    if (novaPessoa.logradouro == "") {
        alert("Preencha o campo Logradouro!")
        return
    }
    if (novaPessoa.complemento == "") {
        alert("Preencha o campo Complemento!")
        return
    }
    if (novaPessoa.bairro == "") {
        alert("Preencha o campo Bairro!")
        return
    }
    if (novaPessoa.cidade == "") {
        alert("Preencha o campo Cidade!")
        return
    }
    if (novaPessoa.estado == "") {
        alert("Preencha o campo Estado!")
        return
    }

    let tabelaLista = document.getElementById("tabelaCliente")
        tabelaLista.innerHTML += `
        <tbody id="lista">
        <tr class="coluna1">
           <td>Nome: ${novaPessoa.nome}</td>
           <td>Idade: ${novaPessoa.idade}</td>
           <td>Sexo: ${novaPessoa.sexo}</td>
         </tr>
         <tr class="coluna2">
           <td>Cep: ${novaPessoa.cep}</td>
           <td>Logradouro: ${novaPessoa.logradouro}</td>
           <td>Complemento: ${novaPessoa.complemento}</td>
         </tr>
         <tr class="coluna3">
           <td>Bairro: ${novaPessoa.bairro}</td>
           <td>Cidade: ${novaPessoa.cidade}</td>
           <td>Estado: ${novaPessoa.estado}</td>
        </tr>
        </tbody>
        `
    

   document.getElementById("nome").value = ""
   document.getElementById("idade").value = ""
   document.getElementById("sexo").value = ""
   document.getElementById("cep").value = ""
   document.getElementById("logradouro").value = ""
   document.getElementById("complemento").value = ""
   document.getElementById("bairro").value = ""
   document.getElementById("cidade").value = ""
   document.getElementById("estado").value = ""

}

document.getElementById("salva").onclick = salvar

async function buscar() {
   let preencherFormulario = (endereco) => {
      document.getElementById("logradouro").value = endereco.logradouro
      document.getElementById("bairro").value = endereco.bairro
      document.getElementById("cidade").value = endereco.localidade
      document.getElementById("estado").value = endereco.uf
   }

   
      let cep = document.getElementById("cep").value
      let url = `http://viacep.com.br/ws/${cep}/json/`;
      
      let dados = await fetch(url)
      let endereco = await dados.json()
      if (endereco.hasOwnProperty("erro")) {
         alert("Cep não encontrado!")
      } else {
         preencherFormulario(endereco);
      }
   
   document.getElementById("busca").addEventListener("click", function() {

   })
}

document.getElementById("busca").onclick = buscar
