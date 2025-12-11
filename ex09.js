//criei um array vazio para armazenamento
let numerosSorteados = []

//funçao para sortear os numero sem repetir
function sortearNumeroSemRepetir() {

  //se o tamanho do array for 72 para de sortear 
  if (numerosSorteados.length === 75) {
    return "acabaram os numeros"
  }

  let numero

  //faça o sorteio de numeros aleatorios de 1 a 75...
  do {
    numero = Math.floor(Math.random() * 75) + 1
  //enquanto os numeros sorteados incluir os numeros aleatorios
  } while (numerosSorteados.includes(numero))
  //coloca os numeros no array
  numerosSorteados.push(numero)

  let letra

  if (numero >= 1 && numero <= 15) {
    letra = 'B'
  } else if (numero >= 16 && numero <= 30) {
    letra = 'I'
  } else if (numero >= 31 && numero <= 45) {
    letra = 'N'
  } else if (numero >= 46 && numero <= 60) {
    letra = 'G'
  } else if (numero >= 61 && numero <= 75) {
    letra = 'O'
  }

  return `${letra}: ${numero}`
}

//funçao para mostrar os numeros sorteados
function mostrarSorteados() {
  let organizados = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
  }

  //enquanto i for menor ao tanto de numeros dentro do array
  for (let i = 0; i < numerosSorteados.length; i++) {
    let numero = numerosSorteados[i]

    //se a pedra (numero) for maior ou igual a 1 e menor ou igual a 15, vai ser colocado no array da letra B
    if(numero >= 1 && numero <= 15){
      organizados.B.push(numero)
    }else if(numero >= 16 && numero <= 30){
      organizados.I.push(numero)
    }else if(numero >= 31 && numero <= 45){
      organizados.N.push(numero)
    }else if(numero >= 46 && numero <= 60){
      organizados.G.push(numero)
    }else if(numero >= 61 && numero <= 75){
      organizados.O.push(numero)
    }
  }

  //para cada letra dentro do objeto organizados, acesse a lista dessa letra e ordene os numeros de menor para maior
  for(let letra in organizados){
    organizados[letra].sort((a, b) => a - b)
  }

  return organizados
}

function verificarCartela(cartela, numero){
  if(numero >= 1 && numero <= 15){

  }
}


for(let i = 0; i < 25; i++){
  sortearNumeroSemRepetir()
}


const sorteios = numerosSorteados
console.log(sorteios)

const cartela = mostrarSorteados()
console.log(cartela)

