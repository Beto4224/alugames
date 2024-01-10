let numeroJogosAlugados = 1;

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    if(imagem.classList.contains('dashboard__item__img--rented')){
        confimacao = confirm(`Deseja devolver o jogo ${nomeJogo}?`);
        if(confimacao){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            numeroJogosAlugados--;
        }
        
    } else {
        confimacao = confirm(`Deseja alugar o jogo ${nomeJogo}?`);
        if(confimacao){
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            numeroJogosAlugados++
        }
    }
    console.log(`Total de jogos alugados: ${numeroJogosAlugados}`);
}