// Objeto que guarda todos os números sorteados do bingo
// Cada letra representa uma coluna do bingo
let numerosSorteados = {
  B: [], // números de 1 a 15
  I: [], // números de 16 a 30
  N: [], // números de 31 a 45
  G: [], // números de 46 a 60
  O: []  // números de 61 a 75
}

// Função responsável por sortear UM número por vez
// Ela garante que nenhum número se repita
function sortearNumeros() {

  // Soma a quantidade total de números já sorteados
  const totalSorteado =
    numerosSorteados.B.length +
    numerosSorteados.I.length +
    numerosSorteados.N.length +
    numerosSorteados.G.length +
    numerosSorteados.O.length

  // Se todos os 75 números já foram sorteados, encerra
  if (totalSorteado === 75) {
    return "todos os numeros sorteados"
  }

  let numero // variável que vai guardar o número sorteado

  // Loop infinito controlado manualmente com break
  do {
    // Gera um número aleatório entre 1 e 75
    numero = Math.floor(Math.random() * 75) + 1

    // Junta todos os números já sorteados em um único array
    const todos = [
      ...numerosSorteados.B,
      ...numerosSorteados.I,
      ...numerosSorteados.N,
      ...numerosSorteados.G,
      ...numerosSorteados.O,
    ]

    // Se o número ainda não foi sorteado, sai do loop
    if (!todos.includes(numero)) {
      break
    }

  } while (true)

  let letra // variável que vai guardar a letra correspondente ao número

  // Descobre a letra com base no intervalo do número
  if (numero >= 1 && numero <= 15) {
    letra = 'B'
  } else if (numero <= 30) {
    letra = 'I'
  } else if (numero <= 45) {
    letra = 'N'
  } else if (numero <= 60) {
    letra = 'G'
  } else {
    letra = 'O'
  }

  // Adiciona o número sorteado na coluna correta
  numerosSorteados[letra].push(numero)
}

// Função que gera uma coluna da cartela
// Recebe o intervalo mínimo e máximo
function gerarColuna(inicio, fim) {

  const coluna = [] // array que vai guardar os números da coluna

  // Continua sorteando até ter 5 números
  while (coluna.length < 5) {

    // Gera um número aleatório dentro do intervalo
    const numero = Math.floor(Math.random() * (fim - inicio + 1)) + inicio

    // Evita números repetidos na mesma coluna
    if (!coluna.includes(numero)) {
      coluna.push(numero)
    }
  }

  // Retorna a coluna pronta
  return coluna
}

// Função que gera uma cartela completa de bingo
function gerarCartela() {

  // Cria cada coluna respeitando os intervalos
  const cartela = {
    B: gerarColuna(1, 15),
    I: gerarColuna(16, 30),
    N: gerarColuna(31, 45),
    G: gerarColuna(46, 60),
    O: gerarColuna(61, 75)
  }

  // Define o espaço livre no centro da cartela (coluna N, índice 2)
  cartela.N[2] = null

  // Retorna a cartela completa
  return cartela
}

// Função responsável por marcar a cartela com "X"
function marcarCartela(cartela, sorteados) {

  // Array com as letras do bingo
  const letras = ["B", "I", "N", "G", "O"]

  // Loop para percorrer cada letra (coluna)
  for (let i = 0; i < letras.length; i++) {

    const letra = letras[i]        // letra atual
    const coluna = cartela[letra] // coluna da cartela correspondente

    // Loop para percorrer os números da coluna
    for (let j = 0; j < coluna.length; j++) {

      const numero = coluna[j] // número atual da coluna

      // Ignora o espaço livre (null)
      if (numero === null) {
        continue
      }

      // Verifica se o número já foi sorteado
      if (verificarNumero(numero, sorteados)) {
        coluna[j] = 'X' // marca o número com X
      }

      // Ignora números que já foram marcados
      if (numero === "X") {
        continue
      }
    }
  }
}

// Função auxiliar que verifica se um número já foi sorteado
function verificarNumero(numero, sorteados) {

  let letra // variável que guarda a letra correspondente ao número

  // Descobre a letra com base no intervalo do número
  if (numero >= 1 && numero <= 15) {
    letra = 'B'
  } else if (numero <= 30) {
    letra = 'I'
  } else if (numero <= 45) {
    letra = 'N'
  } else if (numero <= 60) {
    letra = 'G'
  } else {
    letra = 'O'
  }

  // Retorna true se o número estiver nos sorteados daquela letra
  return sorteados[letra].includes(numero)
}

// =================== TESTES ===================

// Mostra a cartela original
console.log('SUA CARTELA:')
const cartelaCompleta = gerarCartela()
console.table(cartelaCompleta)

// Sorteia 20 números para teste
for (let i = 1; i <= 20; i++) {
  sortearNumeros()
}

// Mostra os números sorteados
console.log('NUMEROS SORTEADOS:')
console.table(numerosSorteados)

// Marca a cartela com base nos números sorteados
marcarCartela(cartelaCompleta, numerosSorteados)

// Mostra a cartela já marcada
console.log('CARTELA MARCADA')
console.table(cartelaCompleta)
