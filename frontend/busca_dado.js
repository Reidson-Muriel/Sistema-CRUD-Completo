let contatoAtual = null;
document.getElementById("entrada").addEventListener("submit", 
    async function buscar_dado(e) {
        console.log("recarregando busca....")
    e.preventDefault();
    const id = document.getElementById("buscar").value;
    
    if (!id){
        alert("Digite o ID");
        return;
    }
    const api_url = `http://${window.location.origin}/contatos/${id}`;
    const resposta = await fetch(api_url);
    
    if (!resposta.ok) {
        alert("Contato nao encontrado!");
        return;
    }
    const contato = await resposta.json();
    contatoAtual = contato.data;
    console.log(contato);
    

    const tbody = document.getElementById("busca_contato");
    tbody.innerHTML = "";

    const tr = document.createElement("tr");
    tr.innerHTML = `
                    <td>${contato.data.id}</td>
                    <td>${contato.data.nome}</td>
                    <td>${contato.data.idade}</td>
                    <td>${contato.data.telefone}</td>    
                    <td>${contato.data.email}</td>    
                    <td>${contato.data.endereco}</td>    
                    <td>${contato.data.observacao}</td>    
                    <td>
                        <div class="acoes">
                            <button class="btn btn-primary me-1" onclick="editar()">Editar</button>
                            <button class="btn btn-danger " onclick="excluir()">Excluir</button>
                        </dvi>
                    </td>
        `;  
    tbody.appendChild(tr);
});

async function editar() {

    if (!contatoAtual){
        alert("Busca primeiro");
        return;
    }

    document.getElementById("edit-id").value = contatoAtual.id;
    document.getElementById("edit-nome").value = contatoAtual.nome;
    document.getElementById("edit-idade").value = contatoAtual.idade;
    document.getElementById("edit-telefone").value = contatoAtual.telefone;
    document.getElementById("edit-email").value = contatoAtual.email;
    document.getElementById("edit-endereco").value = contatoAtual.endereco;
    document.getElementById("edit-observacao").value = contatoAtual.observacao;
    
    document.getElementById("form-editar").style.display = "block";
}

async function salvarEdicao() {
    const id = contatoAtual.id;
    const api_url = `http://${window.location.hostname}:5000/contatos/${id}`;


    const nome = document.getElementById("edit-nome").value;
    const nascimento= document.getElementById("edit-idade").value;
    const telefone = document.getElementById("edit-telefone").value;
    const email = document.getElementById("edit-email").value;
    const endereco = document.getElementById("edit-endereco").value;
    const observacao = document.getElementById("edit-observacao").value;
 

 const resposta = await fetch(api_url, {
        method: "PUT",
         headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome, nascimento, telefone, email, endereco, observacao})
    });
    
    if(!resposta.ok){
        alert("Erro ao atualizar");
        return;
    }
    
        alert("Atualizado com sucesso!");
        
        document.getElementById("form-editar").style.display = "none";
        document.getElementById("entrada").dispatchEvent(new Event("submit"));
 }


async function excluir(){
    const id = contatoAtual.id;
    const api_url = `http://${window.location.hostname}:5000/contatos/${id}`;
    fetch(api_url,{
        method:"DELETE"
    })
    .then(res => {
        if (!res.ok){
            alert("Erro ao deletar");
        }
        alert("Excluido com sucesso!");

        document.getElementById(buscar_dado).innerHTML="";
    });
}