//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//Obtém o nome do  campo de entrada
function obterNome(){
    const entradaNome = document.getElementById("amigo");
    return entradaNome ? entradaNome.value.trim() : "";
}

//Limpa o campo de entrada
function limparCampo() {
    const entradaNome = document.getElementById("amigo");
    if (entradaNome) entradaNome.value = "";
}

//Adiciona um amigo na lista
function adicionarAmigo() {
    const nome = obterNome();

    if (!nome) {
    alert ("Por favor, digite um nome válido!");
    return;
    } 

    if (amigos.includes(nome)){
        alert ("Este amigo já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    limparCampo();
} 

//Atualiza a lista de amigos
function atualizarLista() {
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""; 
     
    for (let i = 0; i < amigos.length; i++){
        const amigo = amigos[i];
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
 }  
}

//Sorteia um amigo
function sortearAmigo() {
    if (amigos.length === 0){
        alert ("Não há amigos na lista para sortear!");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}!`;
}

