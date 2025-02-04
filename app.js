//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function obterNome(){
    let entradaNome = document.getElementById("amigo");
    return entradaNome ? entradaNome.value.trim() : "";
}

function limparCampo() {
    let entradaNome = document.getElementById("amigo");
    if (entradaNome) entradaNome.value = "";
}

function adicionarAmigo() {
    let nome = obterNome();

    if (!nome) {
    alert ("Por favor, digite um nome válido!");
    return;
    } 

    amigos.push(nome);
    atualizarLista();
    limparCampo();
} 

function atualizarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""; 
     
    for (let i = 0; i < amigos.length; i++){
        const amigo = amigos[i];
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
 }  
}
function sortearAmigo() {
    if (amigos.length === 0){
        alert ("Não há amigos na lista para sortear!");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}!`;
}

