let amigos = [];

function limparCampo(){
    inputAmigo = document.querySelector('input')

    inputAmigo.value = ''
}

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    
    if (!inputAmigo.value || inputAmigo.value.trim().lenght === 0 || !isNaN(inputAmigo.value)){
        alert("Por favor, insira um nome.")

    }else{
        if(amigos.includes(inputAmigo.value)){
            alert('Esse amigo já foi adicionado')
        } else{
            amigos.push(inputAmigo.value)
        }
        limparCampo();
    }
    
    
    console.log(amigos)
}

