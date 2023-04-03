/* 
objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

1 passo - dar uma jeito de pegar elementos html dos botoes

2 passo - dar  um jeito de identificar o click do usuario do botão

3 passo - desmarcaro botão selecionado anterior

4 passo - marcar botão clicado como se estivesse selecionado

5 passo - esconder a imagem de fundo anterior

6 passo - fazer aparecer a imagem de fundo anterior correspondente ao botão clicado
*/

//1 passo - dar uma jeito de pegar elementos html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//2 passo - dar  um jeito de identificar o click do usuario do botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click',() => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
 
        mostrasImagemDeFundo(indice);
    })
})

function mostrasImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
