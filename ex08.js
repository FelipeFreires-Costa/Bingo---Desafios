let numerosSorteados = []

function sortearNumeroSemRepetir() {

  if (numerosSorteados.length === 75) {
    return "acabaram os numeros"
  }

  let numero

  do {
    numero = Math.floor(Math.random() * 75) + 1
  } while (numerosSorteados.includes(numero))

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


function mostrarSorteados() {
  let organizados = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
  }

  let letra

  for (let i = 0; i < numerosSorteados.length; i++) {
    let numero = numerosSorteados[i]

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

  for(let letra in organizados){
    organizados[letra].sort((a, b) => a - b)
  }

  return organizados
}

for(let i = 0; i < 20; i++){
  sortearNumeroSemRepetir()
}


const cartela = mostrarSorteados()
console.log(cartela)