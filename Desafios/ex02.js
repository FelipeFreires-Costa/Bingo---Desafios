//logica para fazer o sorteio da coluna B, de 1 a 15


//crio a funçao
function gerarNumeroB(){
  //crio um 'armazenamento'
  let numeros = []

  //um loop, com while, enquanto o array numeros nao tiver 5 numero, vai continuar sorteando
  while(numeros.length < 5){
    //variavel para sortear os cinco numeros
    let sorteio = Math.floor(Math.random() * 15) + 1

    //se o array numeros nao tiver os numeros sorteados, entao coloco o numero dentro do array vazio
    if(!numeros.includes(sorteio)){
      numeros.push(sorteio)
    }else{
      //se nao, (se tiver) entao o numero nao entra na lista
      console.log(`o numero ja tem na listaa`)
    }
  }
  //retorn o array
  return numeros
}

const bingo = gerarNumeroB()
console.log('coluna B:', bingo)