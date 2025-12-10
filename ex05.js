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

function gerarCartela(){
  let cartelaCompleta = {}

  cartelaCompleta.B = gerarColuna(1, 15)
  cartelaCompleta.I = gerarColuna(16, 30)
  cartelaCompleta.N = gerarColuna(31, 45)
  cartelaCompleta.G = gerarColuna(46, 60)
  cartelaCompleta.O = gerarColuna(61, 75)

  return cartelaCompleta
}

const minhaCartela = gerarCartela()

console.log(minhaCartela)