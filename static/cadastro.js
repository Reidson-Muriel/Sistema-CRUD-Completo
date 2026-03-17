const api_url = `http://${window.location.origin}/contatos`;   

document.getElementById("form_contato").addEventListener("submit", async (e) =>{
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const nascimento = document.getElementById("nascimento").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const observacao = document.getElementById("observacao").value;

    const resposta = await fetch(api_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome, nascimento, telefone, email, endereco, observacao})
        });

        const resultado = await resposta.json();
            console.log("Resposta API:", resultado);
            console.log("Status:", resposta.status);

        if (!resposta.ok){
            alert(resultado.error);
            return;  
        }

        alert(resultado.message);
        e.target.reset(); 


});