
function iniciaJogo () {
  console.log(verificaPontuacao(cartasUsuario(), cartasComputador()))

}

function cartasUsuario () {
   const cartaPrimeira = comprarCarta(); 
   const cartaSegunda = comprarCarta();
   console.log(`Usuário cartas: ${cartaPrimeira.texto} ${cartaSegunda.texto} - ${cartaPrimeira.valor + cartaSegunda.valor}`) 
   return (cartaPrimeira.valor + cartaSegunda.valor)
}

function cartasComputador () {
   const cartaPrimeira = comprarCarta(); 
   const cartaSegunda = comprarCarta();
   console.log(`Computador cartas: ${cartaPrimeira.texto} ${cartaSegunda.texto} - ${cartaPrimeira.valor + cartaSegunda.valor}`) 
   return (cartaPrimeira.valor + cartaSegunda.valor)
}

function verificaPontuacao (pontuacaoUsuario, pontuacaoComputador) {
   if(pontuacaoUsuario > pontuacaoComputador) {
      return ("O usuário venceu!")
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      return ("O computador venceu!")
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      return ("Temos um empate!")
   }

}

console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
	iniciaJogo()
} else {
	console.log("O jogo acabou!")
}
