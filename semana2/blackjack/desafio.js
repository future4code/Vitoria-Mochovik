let jogador
let totalPontosUsuario = 0
let totalPontosComputador = 0
const cartasComputador = []
const cartasUsuario = []
let apenasCartasUsuario
let apenasCartasComputador

function jogarNovamente() {
   alert("Bem vindo ao jogo de Blackjack!")
   totalPontosUsuario = 0
   totalPontosComputador = 0
   cartasUsuario.splice(0, cartasUsuario.length-1)
   iniciaJogo();

}

function iniciaJogo() {
   verificaPontuacao(atribuiCartasUsuario(), atribuiCartasComputador())

}

function verificaAses(cartas, jogador) {
   if (cartas[0].texto === cartas[1].texto && cartas[0] === "A") {
      if (jogador === "usuario") {
         atribuiCartasUsuario();
      } else if (jogador === "computador") {
         atribuiCartasComputador();
      }
   }
}


function atribuiCartasUsuario() {

   cartasUsuario[0] = comprarCarta();
   cartasUsuario[1] = comprarCarta();

   jogador = "usuario"
   verificaAses(cartasUsuario)

   console.log(`Usuário cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - ${cartasUsuario[0].valor + cartasUsuario[1].valor}`)
   totalPontosUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   return totalPontosUsuario
}


function atribuiCartasComputador() {

   cartasComputador[0] = comprarCarta();
   cartasComputador[1] = comprarCarta();

   jogador = "computador"
   verificaAses(cartasComputador)
   console.log(`Computador cartas: ${cartasComputador[0].texto}  - ${cartasComputador[0].valor} `)

   totalPontosComputador = cartasComputador[0].valor + cartasComputador[1].valor
   verificaContinuarComprando()
   return totalPontosComputador
}

function verificaContinuarComprando() {
   if (totalPontosUsuario < 21) {
      compraMaisCartaUsuario();
   } else {
      fimDeJogo()
   }
}

function compraMaisCartaUsuario() {
   apenasCartasUsuario = cartasUsuario.map((item) => {
      return item.texto
   })
   if (confirm(`Suas cartas são: ${apenasCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}` +
      `\n` + `Deseja comprar mais uma carta?`)) {
      cartasUsuario.push(comprarCarta());

      totalPontosUsuario = totalPontosUsuario + cartasUsuario[cartasUsuario.length - 1].valor
      verificaContinuarComprando()
   } else {
      comprarMaisCartasComputador();
   }
}
function comprarMaisCartasComputador() {
   if (totalPontosUsuario >= totalPontosComputador && totalPontosUsuario < 21) {
      if (totalPontosComputador <= totalPontosUsuario || totalPontosComputador >= 21) { //acho melhor usar `while` nessa linha porém 
         cartasComputador.push(comprarCarta());                                         //por alguma razão ele trava todo meu computador
         totalPontosComputador = totalPontosComputador + cartasComputador[cartasComputador.length - 1].valor
         comprarMaisCartasComputador();
      }

   }
   fimDeJogo();
}

function fimDeJogo() {
   apenasCartasUsuario = cartasUsuario.map((item) => {
      return item.texto
   })
   apenasCartasComputador = cartasComputador.map((item) => {
      return item.texto
   })

   alert(`Suas cartas são: ${apenasCartasUsuario}. Sua pontuação é: ${totalPontosUsuario} ` + `\n` +
      `As cartas do computador são: ${apenasCartasComputador}. A pontuação do computador é: ${totalPontosComputador}` + `\n` +
      `${verificaPontuacao(totalPontosUsuario, totalPontosComputador)}`)

   if (confirm("Quer iniciar uma nova rodada?")) {
      jogarNovamente()
   } else {
      console.log("O jogo acabou!")
   }
}

function verificaPontuacao(pontuacaoUsuario, pontuacaoComputador) {
   if (pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21 || pontuacaoComputador > 21 && pontuacaoUsuario <= 21) {
      return ("O usuário venceu!")
   } else if (pontuacaoComputador > pontuacaoUsuario || pontuacaoUsuario > 21) {
      return ("O computador venceu!")
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      return ("Temos um empate!")
   }

}

console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   iniciaJogo()
} else {
   console.log("O jogo acabou!")
}
