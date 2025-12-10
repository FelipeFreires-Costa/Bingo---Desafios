let numerosSorteados = []

function sortearNumeroSemRepetir() {

  if(numerosSorteados.length === 75){
    return "acabaram os numeros"
  }

let numero

  do{
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

console.log(sortearNumeroSemRepetir())
console.log(sortearNumeroSemRepetir())
console.log(sortearNumeroSemRepetir())
console.log(sortearNumeroSemRepetir())
console.log(sortearNumeroSemRepetir())

console.log(numerosSorteados)