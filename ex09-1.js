//meu desafio vai ser, fazer uma funçao para sorteador 75 numeros
//outra funçao para criar uma cartela com numeros aleatorios, e limitar cada coluna com 5 indice
let numerosSorteados = {
  B: [],
  I: [],
  N: [],
  G: [],
  O: []
}

function sortearNumeros() {

  const totalSorteado = numerosSorteados.B.length + numerosSorteados.I.length + numerosSorteados.N.length + numerosSorteados.G.length + numerosSorteados.O.length

  if (totalSorteado === 75) {
    return "todos os numeros sorteados"
  }


  let numero
  do {
    numero = Math.floor(Math.random() * 75) + 1

    const todos = [
      ...numerosSorteados.B,
      ...numerosSorteados.I,
      ...numerosSorteados.N,
      ...numerosSorteados.G,
      ...numerosSorteados.O,
    ]
    if(!todos.includes(numero)){
      break
    }
  } while (true)

  let letra

  if(numero >= 1 && numero <= 15){
    letra = 'B'
  }else if(numero >= 16 && numero <= 30){
    letra = 'I'
  }else if(numero >= 31 && numero <= 45){
    letra = 'N'
  }else if(numero >= 46 && numero <= 60){
    letra = 'G'
  }else if(numero >= 61 && numero <= 75){
    letra = "O"
  }

  numerosSorteados[letra].push(numero)

}

function gerarColuna(inicio, fim){
  const coluna = []

  while(coluna.length < 5){
    const numero = Math.floor(Math.random() * (fim - inicio + 1)) + inicio
    if(!coluna.includes(numero)){
      coluna.push(numero)
    }
  }

  return coluna
}


function gerarCartela(){
  const cartela = {
    B: gerarColuna(1, 15),
    I: gerarColuna(16, 30),
    N: gerarColuna(31, 45), 
    G: gerarColuna(46, 60),
    O: gerarColuna(61, 75)
  }
  cartela.N[2] = null

return cartela
}


for (let i = 1; i <= 40; i++) {
  sortearNumeros()
}
const sorteados = numerosSorteados
console.log('NUMEROS SORTEADOS:')
console.table(sorteados)

console.log('SUA CARTELA:')
const cartelaCompleta = gerarCartela()
console.table(cartelaCompleta)