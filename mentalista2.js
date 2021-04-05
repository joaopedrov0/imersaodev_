//Variáveis globais
var vidas
var numeroAleatorio
//funções chamadas por botões
function jogo(){
  numeroAleatorio = parseInt(Math.random() * 100)
  console.log('O número aleatório foi gerado: ' + numeroAleatorio)
  vidas = 5
  console.log('Quantidade de vidas foi reiniciada: ' + vidas)
  escrevaNaTela('Tente adivinhar o número secreto. Ele vai de 0 a 100 <br>' + '///Total de vidas restantes: ' + vidas)
  removerCampo()
  inserirCampo()
}

function verificar () {
  var tentativa = colherRespostaDoUsuario()
  
  if(vidas > 0){
    vidas--
    if(numeroAleatorio == tentativa) {
      
      escrevaNaTela('Muito bem, você acertou! <br>  ///Total de vidas restantes: ' + vidas)
      removerCampo()
    } else if(numeroAleatorio > tentativa) {
      
      escrevaNaTela('O número secreto é maior do que o que você digitou, tente novamente <br> ' + '///Total de vidas restantes: ' + vidas)
    } else if(numeroAleatorio < tentativa) {
      
      escrevaNaTela('O número secreto é menor do que o que você digitou, tente novamente <br> ' + '///Total de vidas restantes: ' + vidas)
    }
  } else if(vidas == 0) {
    escrevaNaTela('Que pena! Não foi dessa vez, não há mais vidas restantes. <br> O número secreto era ' + numeroAleatorio)
    removerCampo()
  }
  var uMessage = document.querySelector('input')
  console.log('Campo limpo')
  uMessage.value = ""
}


//Funções
function colherRespostaDoUsuario() {
    var uMessage = document.querySelector('input')
    console.log('A resposta do usuário foi colhida: ' + uMessage.value)
    return uMessage.value
}

function escrevaNaTela(mensagem) {
    var tagMessage = document.querySelector('p')
    console.log('A mensagem: "' + mensagem + '" foi impressa na tela')
    tagMessage.innerHTML = (mensagem)
}

function reiniciarVidas() {
  vidas = 5
  return vidas
}

function inserirCampo() {
  var html = document.querySelector('#campo')
  html.innerHTML += '<input type="number" name="usuary-says" id="usuary-message" placeholder = "Digite aqui" value = ""></input>'
  html.innerHTML += '<button id="enviar" onclick="verificar(numeroAleatorio, vidas)">Verificar</button>'
  console.log(html.innerHTML)
}

function removerCampo() {
  var html = document.querySelector('#campo')
  html.innerHTML = ""
}
