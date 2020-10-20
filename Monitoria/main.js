let idade = [2,3,5,6,9];
//            0  1  2  3  4
let idade2 = [15,19,25,26];
//             0  1  2  3 

idade.forEach(mostra) //ela mostra os elementos do array, OBS: Não retorna valores
function mostra(el,i){
  console.log(`Idade 1 é `,el)
  console.log(`Idade 2 é `,idade2[i])
}

console.log(idade.map(maisDez)) //Map retorna um array de igual tamanho,
// itera sobre cada elemento 
//caso não satisfaça a condição o valor ficará undefined

function maisDez(el){
  if (el%2==0){
    return el
  }
  return 0
}

console.log(idade.filter(filtrar))

function filtrar(el){
  return el<15
}

console.log(idade.reduce(somatorio)/idade.length)

function somatorio(acumulador,el){
  return acumulador + el
}