function sortearNumero(){
  let sortear = Math.floor(Math.random() * 75 + 1)
  if(sortear >= 1 & sortear <= 15){
    return `B: ${sortear}`
  }else if(sortear >= 16 && sortear <= 30){
    return `I: ${sortear}` 
  }else if(sortear >= 31 && sortear <= 45){
    return `N: ${sortear}` 
  }else if(sortear >= 46 && sortear <= 60){
    return `G: ${sortear}` 
  }else if(sortear >= 61 && sortear <= 75){
    return `O: ${sortear}`
  }
    
}

console.log(sortearNumero())