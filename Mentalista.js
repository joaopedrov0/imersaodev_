//função responsável por iniciar o jogo, gerando um número aleatório e exibindo um texto na tela, além de definir que o total de vidas inicial é 5
function jogo() {
    var numeroAleatorio = parseInt(Math.random() * 100)
    var vidas = 5
    console.log(numeroAleatorio)
    escrevaNaTela('Tente adivinhar o número secreto. Ele vai de 0 a 100' + '///Total de vidas restantes: ' + vidas)
}
//função responsável por ler a resposta do usuário e então verificar se ela está correta ou incorreta, e então mostrar na tela um texto com base nisso
function verificar(numeroAleatorio) {
var campo = document.querySelector('#usuary-message')
var tentativa = campo.value
console.log(campo)
console.log(tentativa)
if(numeroAleatorio == tentativa) {
    var vidas = vidas - 1
    var pcMessage = ('Muito bem, você acertou!  ///Total de vidas restantes: ' + vidas )
    escrevaNaTela(pcMessage)
    } else if(numeroAleatorio > tentativa) {
    var vidas = vidas - 1
    var pcMessage = ('O numero secreto é maior do que o que você digitou, tente novamente ')
    escrevaNaTela(pcMessage)
    } else if(numeroAleatorio < tentativa) {
    var vidas = vidas - 1
    var pcMessage = ('O numero secreto é menor do que o que você digitou, tente novamente ')
    escrevaNaTela(pcMessage)
    }
  escrevaNaTela(pcMessage)
}
//função responsável por escrever o conteúdo dentro dos parenteses na tela
function escrevaNaTela(conteudo) {
var messageTag = document.querySelector('p')
console.log(messageTag)
console.log(messageTag.innerText)
console.log(messageTag.innerHTML)
messageTag.innerText = conteudo
}
  

//função teste que só existe para testar a escrita no documento html, e a função dele é trocar o título da página pelo que o usuário digitar em um prompt.
function teste() {
  var novoTitulo = prompt('Digite o novo título')
  var abc = document.querySelector('p')
  console.log(abc)
  console.log(abc.innerText)
  console.log(abc.innerHTML)
  abc.innerText = novoTitulo
}












  //function teste() {
  //  var novoTitulo = prompt('Digite o novo título')
  //  var abc = document.querySelector('h1')
  //  console.log(abc)
  //  console.log(abc.innerHTML)
  //  abc.innerText = novoTitulo
  //}
  
  //function listarFilmesNaTela(filme) {
  //  var listaFilmes = document.querySelector('#listaFilmes')
  //  var elementoFilme = "<img src=" + filme + ">"
  //  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  //}