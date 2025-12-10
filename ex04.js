
function gerarColuna(inicio, fim){
let numeros = []

while(numeros.length < 5){
  let sorteio = Math.floor(Math.random() * (fim - inicio + 1) + inicio)

  if(!numeros.includes(sorteio)){
    numeros.push(sorteio)
  }else{

  }
}
  return numeros
}

let cartela = {}

cartela.B = gerarColuna(1, 15)
cartela.I = gerarColuna(16, 30)
cartela.N = gerarColuna(31, 45)
cartela.G = gerarColuna(46, 60)
cartela.O = gerarColuna(61, 75)

console.log(cartela)