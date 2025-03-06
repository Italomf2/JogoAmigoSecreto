let amigos = [];

function limparCampo(){
    inputAmigo = document.querySelector('input')

    inputAmigo.value = ''
}

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');

    if (!inputAmigo.value || inputAmigo.value.trim().length === 0 || !isNaN(inputAmigo.value)){
        alert("Por favor, insira um nome.")

    }else{
        if(amigos.includes(inputAmigo.value)){
            alert('Esse amigo já foi adicionado')
        } else{
            amigos.push(inputAmigo.value)
            atualizarLista();
            limparCampo();
        }
  
    }
    
}

function atualizarLista(){
    const lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
      });

}

function sortearAmigo(){

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeCorrespondenteAoIndice = amigos[indiceSorteado];
    let listaSorteados = [];

    if (amigos.length == 0){
        alert('Não há ninguém para ser sorteado')
    }

    listaSorteados.push(nomeCorrespondenteAoIndice);
    
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `O nome da pessoa sorteada é ${listaSorteados}`

    atualizarLista();
    limparCampo();
    
}




