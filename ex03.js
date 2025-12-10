//crio a funçao
function gerarColuna(inicio, fim){
  //crio um 'armazenamento'
  let numeros = []

  //um loop, com while, enquanto o array numeros nao tiver 5 numero, vai continuar sorteando
  while(numeros.length < 5){
    //variavel para sortear os cinco numeros
    let sorteio = Math.floor(Math.random() * (fim - inicio + 1) + inicio)

    //se o array numeros nao tiver os numeros sorteados, entao coloco o numero dentro do array vazio
    if(!numeros.includes(sorteio)){
      numeros.push(sorteio)
    }else{
      //se nao, (se tiver) entao o numero nao entra na lista
    }
  }
  //retorn o array
  return numeros
}
console.log("B")
console.log(gerarColuna(1, 15))   // coluna B
console.log("I")
console.log(gerarColuna(16, 30))  // coluna I
console.log("N")
console.log(gerarColuna(31, 45))  // coluna N
console.log("G")
console.log(gerarColuna(46, 60))  // coluna G
console.log("0")
console.log(gerarColuna( 61, 75))  // coluna O

